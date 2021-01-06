from flask import Flask, make_response, jsonify, send_from_directory, request
# from user import UserSignUp
from flask_restful import Api
from flask_cors import CORS
import db
import sqlite3
from user import User
import security

app = Flask(__name__)#, static_folder='build', static_url_path='')
# api = Api(app)
CORS(app)


@app.before_first_request
def create_table():
    db.create_db()


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'app.js')


@app.route('/signup', methods=['POST'])
def signup():
    # data = UserSignUp.parser
    connection = sqlite3.connect('data.db')
    cursor = connection.cursor()
    request_data = request.get_json()
    # Check user isn't already exist:
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

    return {"message": "User signed up successfully!"}, 201

# api.add_resource(UserSignUp, '/signup/')

if __name__ == '_main_':
    app.run(port=5000, debug=True)