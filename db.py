import sqlite3


# MUST BE INTEGER
# This is the only place where int vs INTEGER matters—in auto-incrementing columns
# Gender, Mail, Name, Age, Neighborhood, Degree, Department, Year, Hobbies

def create_db():
    connection = sqlite3.connect('data.db')
    cursor = connection.cursor()
    create_table = \
    '''
    DROP TABLE IF EXISTS users;
    CREATE TABLE users ('id' INTEGER PRIMARY KEY, 
                        'firstName' TEXT NOT NULL,
                        'lastName' TEXT NOT NULL,
                        'password' TEXT NOT NULL,
                        'confirmPassword' TEXT NOT NULL,
                        'email' TEXT NOT NULL,
                        'terms' INTEGER DEFAULT 1,
                        'updates' INTEGER DEFAULT 1,
                        'validationCode' TEXT,
                        'gender' TEXT,
                        'age' INTEGER,
                        'neighborhood' TEXT,
                        'image' TEXT,
                        'degree' TEXT,
                        'faculty' TEXT,
                        'major' TEXT,
                        'secondMajor' TEXT DEFAULT NULL,
                        'year' INTEGER,
                        'hobbies' TEXT);'''
    cursor.executescript(create_table)

    connection.commit()
    connection.close()

create_db()