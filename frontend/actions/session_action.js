import { signup, login, logout } from '../util/session_api_util';

import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveError = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const deleteErrors = () => ({
    type: CLEAR_ERRORS
})

export const signUp = formUser => dispatch => signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveError(errors)));

export const logIn = formUser => dispatch => login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveError(errors)));

export const logOut = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser()));

export const updateUser = (userId, userForm) => dispatch => (
    UserAPIUtil.updateUser(userId, userForm)
        .then(user => dispatch(receiveUser(user)))
)
