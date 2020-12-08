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
    ACCOUNT_REMIND_PASSWORD_LOADING_FAILED
} from '../constants'

// login
export const login_loading = () => ({
    type: ACCOUNT_LOGIN_STATUS,
    status: ACCOUNT_LOGIN_LOADING
})

export const login_failed = (err_code) => ({
    type: ACCOUNT_LOGIN_STATUS,
    status: ACCOUNT_LOGIN_LOADING_FAILED,
    err_code
})

export const login_successful = () => ({
    type: ACCOUNT_LOGIN_STATUS,
    status: ACCOUNT_LOGIN_LOADING_SUCCESFUL
})

// logout
export const logout_loading = () => ({
    type: ACCOUNT_LOGOUT_STATUS,
    status: ACCOUNT_LOGOUT_LOADING
})

export const logout_failed = (err_code) => ({
    type: ACCOUNT_LOGOUT_STATUS,
    status: ACCOUNT_LOGOUT_LOADING_FAILED,
    err_code
})

export const logout_successful = () => ({
    type: ACCOUNT_LOGOUT_STATUS,
    status: ACCOUNT_LOGOUT_LOADING_SUCCESFUL
})

// change
export const change_loading = () => ({
    type: ACCOUNT_CHANGE_STATUS,
    status: ACCOUNT_CHANGE_LOADING
})

export const change_failed = (err_code) => ({
    type: ACCOUNT_CHANGE_STATUS,
    status: ACCOUNT_CHANGE_LOADING_FAILED,
    err_code
})

export const change_successful = () => ({
    type: ACCOUNT_CHANGE_STATUS,
    status: ACCOUNT_CHANGE_LOADING_SUCCESFUL
})

// remind
export const remind_loading = () => ({
    type: ACCOUNT_REMIND_PASSWORD_STATUS,
    status: ACCOUNT_REMIND_PASSWORD_LOADING
})

export const remind_failed = (err_code) => ({
    type: ACCOUNT_CHANGE_STATUS,
    status: ACCOUNT_REMIND_PASSWORD_LOADING_FAILED,
    err_code
})

export const remind_successful = () => ({
    type: ACCOUNT_CHANGE_STATUS,
    status: ACCOUNT_REMIND_PASSWORD_LOADING_SUCCESFUL,
})

