import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGOUT,
	RESET_MESSAGE_ERROR
} from './constants';


export const loginUser = (username, password) => ({
	type: LOGIN_USER,
	payload: { username, password },
});

export const loginUserSuccess = () => ({
	type: LOGIN_USER_SUCCESS,
});

export const loginUserFailed = (error) => ({
	type: LOGIN_USER_FAILED,
	payload: error,
});

export const logout = () => ({
	type: LOGOUT,
});

export const resetMessageError = () => ({
	type: RESET_MESSAGE_ERROR
});