import sqlite3

import pandas as pd
import datetime


# column names pertinent for the algorithm
col_names_for_algo = ['name',
                      'last_name',
                      'mail',
                      'gender',
                      'date_of_birth',
                      'neighborhood',
                      'degree',
                      'faculty',
                      'first_major',
                      'degree_year',
                      'hobbies',
                      'group',
                      'second_major'] # todo add facetoface or leave group only


def load_df_from_csv(csv_path):
    df = pd.read_csv(csv_path)
    # choose columns relevant for machine learning
    df_from_sql = pd.concat((df.iloc[:, 1:13], df.iloc[:, -3]), axis=1)
    df_from_sql.columns = col_names_for_algo
    return df_from_sql

def load_df_from_sql():
    connection = sqlite3.connect('data.db')
    # cursor = connection.cursor()
    query = '''
    SELECT firstName,
           lastName,
           email,  
           gender, 
           age, 
           neighborhood, 
           degree, 
           faculty, 
           major, 
           secondMajor, 
           year, 
           hobbies
    FROM users;'''
    items = pd.read_sql_query(sql=query, con=connection)
    connection.commit()
    connection.close()
    return items

def drop_extra_columns(df):
    to_drop = ['firstName',
               'lastName'] # todo so far no id, password and image, treat mail as unique value
    return df.drop(to_drop, axis=1)


def birth_to_age(series_birth):
    today = datetime.date.today()
    dd_mm_yyyy_to_date = lambda birth: datetime.datetime.strptime(birth, "%d/%m/%Y")
    get_age = lambda born: today.year - born.year - ((today.month, today.day) < (born.month, born.day))
    series_age = series_birth.apply(lambda birth: get_age(dd_mm_yyyy_to_date(birth)))
    series_age.name = 'age'
    return series_age


def engineer_features(df):
    """
    gender --> binary
    date_of_birth --> age

    neighborhood --> one-hot
    degree --> one-hot
    faculty --> one-hot
    first_major --> one-hot
    second_major --> one-hot
    
    degree_year --> degree_year
    hobbies --> split and one-hot
    group --> binary
    """

    # mail --> name.lastname # todo or not todo
    # Daniil.levin@mail.huji.ac.il --> daniil.levin
    # df.loc[:, 'mail'] = df['mail'].apply(lambda x: x.split('@')[0].lower())


    # gender --> binary
    df.loc[:, 'gender'] = df['gender'].apply(lambda x: 1 if x.lower() == 'male' else 0)
    # todo find the most efficient way of replacing a column of a dataframe


    # date_of_birth --> age
    # todo unnecessary because the column already contains age
    # df.loc[:, 'date_of_birth'] = birth_to_age(df['date_of_birth'])
    # df.rename(columns={'date_of_birth': 'age'}, inplace=True)


    # neighborhood --> one-hot
    # degree --> one-hot
    # faculty --> one-hot
    # first_major --> one-hot
    # second_major --> one-hot
    to_one_hot = ['neighborhood', 'degree', 'faculty', 'major', 'secondMajor']
    df = pd.get_dummies(df, columns=to_one_hot)


    # degree_year --> degree_year
    # todo must be separate for MA, BA and PhD
    df.loc[:, 'year'] = df['year'].apply(lambda x: x - 1)
    # todo not sure whether this is the best way to treat years - categorical ordinal numerical features


    # hobbies --> split and one-hot
    strip_lower = lambda s: s.strip().lower()
    # convert ' art , sport , music' into ['art', 'sport', 'music']
    df.loc[:, 'hobbies'] = df['hobbies'].apply(lambda x: list(map(strip_lower, x.split(','))))


    hobbies = df['hobbies']
    # iterate over every found hobby
    for hobby in set(hobbies.explode()):
        # for each hobby create a column and fill it with 1 iff it's present in the list of hobbies of the corresponding row
        df[hobby] = hobbies.apply(lambda hobbies_lst: int(hobby in hobbies_lst))
    df = df.drop(['hobbies'], axis=1)


    # group --> binary todo get rid or keep
    # group_mapper = {'Small groups connections': 1, 'One-on-one connections': 0}
    # df.loc[:, 'group'] = df['group'].map(group_mapper)

    return df

def normalize(df):
    return df

def prepare_for_training():
    # df = load_df_from_csv('./data/quest.csv')
    df = load_df_from_sql() # todo
    # df = drop_extra_columns(df)
    df = engineer_features(df)
    df = normalize(df)
    # print(df.head()) # todo return initial dataframe and modified dataframe together
    return df

# prepare_for_training() # todo
