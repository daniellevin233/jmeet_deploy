import sqlite3
from data_preprocessing import birth_to_age
import pandas as pd


# column names pertinent for storing in the database
col_names_for_db = ['name',
                    'last_name',
                    'mail',
                    'gender',
                    'age',
                    'neighborhood',
                    'degree',
                    'faculty',
                    'first_major',
                    'degree_year',
                    'hobbies',
                    'second_major'] # todo add facetoface or leave group only


def load_df(csv_path):
    df = pd.read_csv(csv_path)
    # choose columns relevant for the database
    df_for_sql = pd.concat((df.iloc[:, 1:12], df.iloc[:, -3]), axis=1)
    df_for_sql.columns = col_names_for_db
    df_for_sql.loc[:, 'age'] = birth_to_age(df_for_sql['age'])
    return df_for_sql

def insert_into_db(df):
    connection = sqlite3.connect('data.db')
    cursor = connection.cursor()
    users = []
    for row in df.iterrows():
        cur_user_dict = dict(row[1])
        cur_user_dict['password'] = 'no_password'
        cur_user_dict['confirmPassword'] = 'no_password'
        cur_user_dict['terms'] = 1
        cur_user_dict['updates'] = 1
        cur_user_dict['validationCode'] = 'no_validationCode'
        cur_user_dict['image'] = 'no_image'
        users.append(cur_user_dict)
    insert_query = \
    '''
    INSERT INTO users (firstName,
                       lastName,
                       password,
                       confirmPassword,
                       email,
                       terms,
                       updates,
                       validationCode,
                       gender,
                       age,
                       neighborhood,
                       image,
                       degree,
                       faculty,
                       major,
                       secondMajor,
                       year,
                       hobbies)
                       
                  VALUES (:name,
                          :last_name,
                          :password,
                          :confirmPassword,
                          :mail,
                          :terms,
                          :updates,
                          :validationCode,
                          :gender,
                          :age,
                          :neighborhood,
                          :image,
                          :degree,
                          :faculty,
                          :first_major,
                          :second_major,
                          :degree_year,
                          :hobbies)
    '''

    cursor.executemany(insert_query, users)

    connection.commit()
    connection.close()

if __name__ == '__main__':
    df = load_df('./data/quest.csv')
    insert_into_db(df)