from data_preprocessing import prepare_for_training
from sklearn.metrics import pairwise_distances
import numpy as np

'''
metrics from scikit-learn: [‘cityblock’, ‘cosine’, ‘euclidean’, ‘l1’, ‘l2’, ‘manhattan’]
'''

def get_recommendations(user_mail, n=4):
    df = prepare_for_training()

    mask = df['mail'] == user_mail
    mails = df['mail'][~mask] # vector of emails that are candidates for matching

    df_no_mail = df.drop(['mail'], axis=1)

    Y = df_no_mail[mask] # the user for whom the distance vector should be computed
    X = df_no_mail[~mask] # all the rest of the users
    similarity_vector = pairwise_distances(X, Y, metric='euclidean')

    # indices of the n users closest to the target user
    n_closest_users_idx = np.argpartition(similarity_vector, n, axis=0)[:n]
    n_closest_users_idx = n_closest_users_idx.reshape((n,))

    # print(similarity_vector[n_closest_users_idx], '\n')
    # print(mails[n_closest_users_idx])
    return list(mails[n_closest_users_idx])

print(get_recommendations('hadas.sadeh@mail.huji.ac.il'))

# print(get_recommendations('daniil.levin@mail.huji.ac.il'))

# print(timeit(get_recommendations, number = 20))
#
# code = """get_recommendations('daniil.levin@mail.huji.ac.il')"""
#
# execution_time = timeit(code)
#
# print(execution_time)