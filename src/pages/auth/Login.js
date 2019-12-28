import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../../redux/auth/actions';
import LoginForm from './LoginForm';

const Login = props => {
	const loginFormSubmit = (values) => {
		props.loginUser(values.email, values.password, values.rememberMe);
	};

	if (props.isAuth) {
		return <Redirect to='/' />
	}

	return <LoginForm onSubmit={loginFormSubmit} />

};

const mapStateToProps = state => {
	return {
		isAuth: state.Auth.isAuth
	}
};

export default connect(mapStateToProps, {loginUser})(Login);