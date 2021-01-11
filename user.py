from flask import request, jsonify
from flask_restful import Resource, reqparse
import sqlite3
import security
from users_recommender import get_recommendations


class User:
    def __init__(self, id, name, last, password, confirmPassword, mail, terms, updates, validationCode, gender,
                 age, neighborhood, image, degree, faculty, major, secondMajor, year, hobbies):
        self.id = id
        self.name = name
        self.last = last
        self.password = password
        self.confirmPassword = confirmPassword
        self.mail = mail
        self.terms = terms
        self.updates = updates
        self.validationCode = validationCode
        self.gender = gender
        self.age = age
        self.neighborhood = neighborhood
        self.image = image
        self.degree = degree
        self.faculty = faculty
        self.major = major
        self.secondMajor = secondMajor
        self.year = year
        self.hobbies = hobbies

    @classmethod
    def find_by_mail(cls, mail):
        """
        Returns new User object if exists in data base.
        :param mail: Mail of the user.
        :return: None if no user, User object if found in db.
        """
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM users WHERE email=?"
        res = cursor.execute(query, (mail,))
        row = res.fetchone()
        if row:
            user = cls(*row)
        else:
            user = None

        connection.close()
        return user


class UserSignUp(Resource):
    # Parse every field?
    # parser = reqparse.RequestParser()
    # parser.add_argument('mail',
    #                     type=str,
    #                     required=True,
    #                     help="User should have an email"
    #                     )

    def post(self):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        request_data = request.get_json()

        # Verify that user doesn't exist already:
        if User.find_by_mail(request_data['email']):
            return {"message": "A user with that mail already exists!"}, 400
        if not security.authorize_huji_mail(request_data['email']):
            return {"message": "Only huji students can sign up!"}, 400

        query = "INSERT INTO users VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        # Hobbies: study groups, basketball, gardening, arts, party, gaming, music, yoga, soccer, traveling.
        cursor.execute(query,
                       (
                        request_data["firstName"],
                        request_data["lastName"],
                        request_data["password"],
                        request_data["confirmPassword"],
                        request_data["email"],
                        request_data["terms"],
                        request_data["updates"],
                        request_data["validationCode"],
                        request_data["gender"],
                        request_data["age"],
                        request_data["neighborhood"],
                        request_data["image"],
                        request_data["degree"],
                        request_data["faculty"],
                        request_data["major"],
                        request_data["secondMajor"],
                        request_data["year"],
                        request_data["basketball"]
                       ))

        connection.commit()
        connection.close()

        best_matches_data = get_recommendations(request_data['email'])

        return jsonify(best_matches_data), 200

        # return {"message": "User signed up successfully!"}, 201

    def get(self):
        return {"message": "no get"}
        # connection = sqlite3.connect('data.db')
        # cursor = connection.cursor()
        # query = "SELECT * FROM users"
        # res = cursor.execute(query)
        # users = []
        # for row in res:
        #     users.append({
        #         'id': row[0],
        #         'firstName': row[1],
        #         'lastName': row[2],
        #         'password': row[3],
        #         'confirmPassword': row[4],
        #         'mail': row[5],
        #         'terms': row[6],
        #         'updates': row[7],
        #         'validationCode': row[8],
        #         'gender': row[9],
        #         'age': row[10],
        #         'neighborhood': row[11],
        #         'image': row[12],
        #         'degree': row[13],
        #         'faculty': row[14],
        #         'major': row[15],
        #         'secondMajor': row[16],
        #         'year': row[17],
        #         'basketball': row[18],
        #     })
        # connection.close()
        # return {'users': users}