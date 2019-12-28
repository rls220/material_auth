import {
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGOUT,
	RESET_MESSAGE_ERROR,
} from './constants';

import { isUserAuthenticated } from '../../helpers/auth/authUtils';

const INIT_STATE = {
	isAuth: isUserAuthenticated(),
	error: '',
};


const Auth = (state = INIT_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				isAuth: true
			};
		case LOGIN_USER_FAILED:
			return {
				...state,
				error: action.payload ,
				isAuth: false
			};
		case LOGOUT:
			return {
				...state,
				isAuth: false,
				error: ''
			};
		case RESET_MESSAGE_ERROR:
			return {
				...state,
				error: ''
			};
		default:
			return { ...state };
	}
};

export default Auth;
