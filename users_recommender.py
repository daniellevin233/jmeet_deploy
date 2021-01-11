import json

from data_preprocessing import prepare_for_training
from sklearn.metrics import pairwise_distances
import numpy as np

'''
metrics from scikit-learn: [‘cityblock’, ‘cosine’, ‘euclidean’, ‘l1’, ‘l2’, ‘manhattan’]
'''

def get_recommendations(user_mail, n=4):
    df = prepare_for_training()

    df_to_train = df.drop(['firstName', 'lastName'], axis=1)

    mask = df_to_train['email'] == user_mail
    mails = df_to_train['email'][~mask] # vector of emails that are candidates for matching

    df_no_mail = df_to_train.drop(['email'], axis=1)

    Y = df_no_mail[mask] # the user for whom the distance vector should be computed
    X = df_no_mail[~mask] # all the rest of the users
    similarity_vector = pairwise_distances(X, Y, metric='euclidean')

    # indices of the n users closest to the target user
    n_best_matches_idx = np.argpartition(similarity_vector, n, axis=0)[:n]
    n_best_matches_idx = n_best_matches_idx.reshape((n,))

    # extract mails of the best matches
    n_best_matches_mails = list(mails[n_best_matches_idx])

    data = {mail: {'firstName': df['firstName'][df['email'] == mail].values[0],
                   'age': df['age'][df['email'] == mail].values[0]}
            for mail in n_best_matches_mails}

    return data

res = get_recommendations('hadas.sadeh@mail.huji.ac.il') # todo
print(res)
print(json.dumps(res, indent=4, default=int)) # todo

# print(get_recommendations('daniil.levin@mail.huji.ac.il'))

# print(timeit(get_recommendations, number = 20))
#
# code = """get_recommendations('daniil.levin@mail.huji.ac.il')"""
#
# execution_time = timeit(code)
#
# print(execution_time)