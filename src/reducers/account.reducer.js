import {
    ACCOUNT_LOGIN_INITIAL_STATE,
    ACCOUNT_LOGOUT_INITIAL_STATE,
    ACCOUNT_CHANGE_INITIAL_STATE,
    ACCOUNT_REMIND_PASSWORD_INITIAL_STATE,
    ACCOUNT_REGISTER_INITIAL_STATE,
} from '../constants'

const login = (state = {
    ACCOUNT_LOGIN_STATUS: ACCOUNT_LOGIN_INITIAL_STATE,
    ACCOUNT_LOGOUT_STATUS: ACCOUNT_LOGOUT_INITIAL_STATE,
    ACCOUNT_CHANGE_STATUS: ACCOUNT_CHANGE_INITIAL_STATE,
    ACCOUNT_REMIND_PASSWORD_STATUS: ACCOUNT_REMIND_PASSWORD_INITIAL_STATE,
    ACCOUNT_REGISTER_SATUS: ACCOUNT_REGISTER_INITIAL_STATE,

}, action) => {
    switch (action.type) {
        case ACCOUNT_LOGIN_STATUS:
            return [
                ...state,
                {
                    ACCOUNT_LOGIN_STATUS: action.status,
                    err_code
                }
            ]
        case ACCOUNT_LOGOUT_STATUS:
            return [
                ...state,
                {
                    ACCOUNT_LOGOUT_STATUS: action.status,
                    err_code
                }
            ]
        case ACCOUNT_CHANGE_STATUS:
            return [
                ...state,
                {
                    ACCOUNT_CHANGE_STATUS: action.status,
                    err_code
                }
            ]
        case ACCOUNT_REMIND_PASSWORD_STATUS:
            return [
                ...state,
                {
                    ACCOUNT_REMIND_PASSWORD_STATUS: action.status,
                    err_code
                }
            ]
        case ACCOUNT_REGISTER_STATUS:
            return [
                ...state,
                {
                    ACCOUNT_REGISTER_STATUS: action.status,
                    err_code
                }
            ]
        default:
            return state;
    }
}

export default login;