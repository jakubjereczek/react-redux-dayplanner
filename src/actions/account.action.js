import {
    ACCOUNT_LOGIN_LOADING,
    ACCOUNT_LOGIN_LOADING_SUCCESFUL,
    ACCOUNT_LOGIN_LOADING_FAILED,
    ACCOUNT_LOGOUT_LOADING,
    ACCOUNT_LOGOUT_LOADING_SUCCESFUL,
    ACCOUNT_LOGOUT_LOADING_FAILED
} from '../constants'

export const login_loading = () => ({
    type: ACCOUNT_LOGIN_STATUS,
    status: ACCOUNT_LOGIN_LOADING
})

export const login_failed = () => ({
    type: ACCOUNT_LOGIN_STATUS,
    status: ACCOUNT_LOGIN_LOADING_FAILED
})

export const login_successful = () => ({
    type: ACCOUNT_LOGIN_STATUS,
    status: ACCOUNT_LOGIN_LOADING_SUCCESFUL
})

export const logout_loading = () => ({
    type: ACCOUNT_LOGOUT_STATUS,
    status: ACCOUNT_LOGOUT_LOADING
})

export const logout_failed = () => ({
    type: ACCOUNT_LOGOUT_STATUS,
    status: ACCOUNT_LOGOUT_LOADING_FAILED
})

export const logout_successful = () => ({
    type: ACCOUNT_LOGOUT_STATUS,
    status: ACCOUNT_LOGOUT_LOADING_SUCCESFUL
})

