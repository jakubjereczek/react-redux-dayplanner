import {
    ACCOUNT_LOGIN_INITIAL_STATE,
    ACCOUNT_LOGOUT_INITIAL_STATE
} from '../constants'

const login = (state = {
    ACCOUNT_LOGIN_STATUS: ACCOUNT_LOGIN_INITIAL_STATE,
    ACCOUNT_LOGOUT_STATUS: ACCOUNT_LOGOUT_INITIAL_STATE
}, action) => {
    switch (action.type) {
        case ACCOUNT_LOGIN_STATUS:
            return [
                ...state,
                {
                    ACCOUNT_LOGIN_STATUS: action.status
                }
            ]
        case ACCOUNT_LOGOUT_STATUS:
            return [
                ...state,
                {
                    ACCOUNT_LOGOUT_STATUS: action.status
                }
            ]
        default:
            return state;
    }
}

export default login;