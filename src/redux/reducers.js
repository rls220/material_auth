import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import Auth from './auth/reducers';

export default combineReducers({
	Auth,
	form: formReducer
});