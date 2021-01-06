from flask import Flask, make_response, jsonify
from user import UserSignUp
from flask_restful import Api
from flask_cors import CORS, cross_origin
import db

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
api = Api(app)
# CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.before_first_request
def create_table():
    db.create_db()


@app.route('/')
@cross_origin()
def root():
    return app.send_static_file('index.html')

api.add_resource(UserSignUp, '/signup')

if __name__ == '__main__':
    app.run(port=5000, debug=True)