import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { isUserAuthenticated } from '../helpers/auth/authUtils';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			if (!isUserAuthenticated()) {
				// not logged in so redirect to login page with the return url
				return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
			}

			// authorised so return component
			return <Component {...props} />;
		}}
	/>
);

export default PrivateRoute;