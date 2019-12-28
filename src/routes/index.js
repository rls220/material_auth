import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';

const rootRoute = {
	path: '/',
	exact: true,
	name: 'Home',
	component: Home,
	route: PrivateRoute,
};

const authRoutes = {
	path: '/login',
	exact: true,
	name: 'Login',
	component: Login,
	route: Route,
};

const allRoutes = [
	rootRoute,
	authRoutes,
];

export {allRoutes};