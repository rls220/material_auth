import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { fetchJSON } from '../../helpers/api';
import { LOGIN_USER } from './constants';
import { loginUserSuccess, loginUserFailed } from './actions';
import { setSession, resetSession } from '../../helpers/auth/authUtils';

/**
 * Login the user
 * @param {*} payload - username and password
 */
function* login({ payload: { username, password } }) {
	const options = {
		body: JSON.stringify({ username, password }),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	};

	try {
		const response = yield call(fetchJSON, '/users/authenticate', options);
		setSession(response);
		yield put(loginUserSuccess());
	} catch (error) {
		let message;
		switch (error.status) {
			case 500:
				message = 'Internal Server Error';
				break;
			case 401:
				message = 'Invalid credentials';
				break;
			default:
				message = error;
		}
		yield put(loginUserFailed(message));
		resetSession();
	}
}


export function* watchLoginUser() {
	yield takeEvery(LOGIN_USER, login);
}

function* authSaga() {
	yield all([fork(watchLoginUser)]);
}

export default authSaga;
