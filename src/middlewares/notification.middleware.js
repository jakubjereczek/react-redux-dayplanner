import {
    ACCOUNT_LOGIN_LOADING,
    ACCOUNT_LOGIN_LOADING_SUCCESFUL,
    ACCOUNT_LOGIN_LOADING_FAILED,
    ACCOUNT_LOGOUT_LOADING,
    ACCOUNT_LOGOUT_LOADING_SUCCESFUL,
    ACCOUNT_LOGOUT_LOADING_FAILED
} from '../constants'

import notification from '../toast'

const notificationMiddleware = () => next => action => {
    console.log(action.type)

    switch (action.type) {
        case ACCOUNT_LOGIN_LOADING:
            notification.toastDefault("Rozpoczynam logowanie...")
            break;
        case ACCOUNT_LOGIN_LOADING_SUCCESFUL:
            notification.toastSuccess("Udało się zalogować.")
            break;
        case ACCOUNT_LOGIN_LOADING_FAILED:
            notification.toastWarn("Wystąpił problem z logowaniem");
            break;
        case ACCOUNT_LOGOUT_LOADING:
            notification.toastDefault("Rozpoczynam wylogowywanie...")
            break;
        case ACCOUNT_LOGOUT_LOADING_SUCCESFUL:
            notification.toastSuccess("Udało się wylogować.")
            break;
        case ACCOUNT_LOGOUT_LOADING_FAILED:
            notification.toastWarn("Wystąpił problem z wylogowaniem");
            break;
    }
    next(action);
}


export default notificationMiddleware;
