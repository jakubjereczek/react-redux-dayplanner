import {
    ACCOUNT_LOGIN_LOADING,
    ACCOUNT_LOGIN_LOADING_SUCCESFUL,
    ACCOUNT_LOGIN_LOADING_FAILED,
    ACCOUNT_LOGOUT_LOADING,
    ACCOUNT_LOGOUT_LOADING_SUCCESFUL,
    ACCOUNT_LOGOUT_LOADING_FAILED,
    ACCOUNT_CHANGE_LOADING,
    ACCOUNT_CHANGE_LOADING_SUCCESFUL,
    ACCOUNT_CHANGE_LOADING_FAILED,
    ACCOUNT_REMIND_PASSWORD_LOADING,
    ACCOUNT_REMIND_PASSWORD_LOADING_SUCCESFUL,
    ACCOUNT_REMIND_PASSWORD_LOADING_FAILED,
    ACCOUNT_REGISTER_LOADING,
    ACCOUNT_REGISTER_LOADING_SUCCESFUL,
    ACCOUNT_REGISTER_LOADING_FAILED,
} from '../constants'

import notification from '../toast'
import errors from '../utils/errors';

const notificationMiddleware = () => next => action => {
    console.log(action.type)

    switch (action.type) {
        case ACCOUNT_LOGIN_LOADING:
        case ACCOUNT_LOGOUT_LOADING:
        case ACCOUNT_CHANGE_LOADING:
        case ACCOUNT_REMIND_PASSWORD_LOADING:
        case ACCOUNT_REGISTER_LOADING:
            notification.toastDefault("Ładowanie...")
            break;
        case ACCOUNT_LOGIN_LOADING_SUCCESFUL:
            notification.toastSuccess("Udało się zalogować!")
            break;
        case ACCOUNT_LOGIN_LOADING_FAILED:
            notification.toastWarn("Wystąpił problem z logowaniem. Bląd: " + errors.selectAuthError(action.err_code));
            break;
        case ACCOUNT_LOGOUT_LOADING_SUCCESFUL:
            notification.toastSuccess("Udało się wylogować!")
            break;
        case ACCOUNT_LOGOUT_LOADING_FAILED:
            notification.toastWarn("Wystąpił problem z wylogowaniem. Bląd: " + errors.selectAuthError(action.err_code));
            break;
        case ACCOUNT_CHANGE_LOADING_SUCCESFUL:
            notification.toastSuccess("Udało się zmienić dane!")
            break;
        case ACCOUNT_CHANGE_LOADING_FAILED:
            notification.toastWarn("Wystąpił problem ze zmiana danych. Bląd " + errors.selectAuthError(action.err_code));
            break;
        case ACCOUNT_REMIND_PASSWORD_LOADING_SUCCESFUL:
            notification.toastSuccess("Sprawdz Twoj email dla kolejnych instrukcji!")
            break;
        case ACCOUNT_REMIND_PASSWORD_LOADING_FAILED:
            notification.toastWarn("Wystąpił problem z odzyskiwaniem hasla. Bląd " + errors.selectAuthError(action.err_code));
            break;
        case ACCOUNT_REGISTER_LOADING_SUCCESFUL:
            notification.toastSuccess("Konto zostało zarejestrowane. Zaraz zostaniesz przeniesiony na stone głowna");
            break;
        case ACCOUNT_REGISTER_LOADING_FAILED:
            notification.toastWarn("Wystąpił problem z rejestracją. Bląd " + errors.selectAuthError(action.err_code));
            break;
    }
    next(action);
}


export default notificationMiddleware;
