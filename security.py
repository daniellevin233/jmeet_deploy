# from user import User
# from werkzeug.security import safe_str_cmp


# def autenticate(mail, password):
#     user = User.find_by_mail(mail)
#     if user and safe_str_cmp(user.password, password):
#         return user


def authorize_huji_mail(mail):
    mail_domain = str(mail).split('@')[1]
    company = mail_domain.split('.')[1]
    if company == 'huji':
        return True
    return False


def convert_str_to_list(user_hobbies):
    pass
