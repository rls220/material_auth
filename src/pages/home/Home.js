import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../../redux/auth/actions';
import { resetSession } from '../../helpers/auth/authUtils';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: 0,
		zIndex: 1,
		height: '100%',
		overflow: 'hidden',
	},
	paper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	},
}));

const Home = props => {
	const classes = useStyles();
	const logoutSubmit = () => {
		props.logout();
		resetSession();
	};

	return (
		<Container component="main" maxWidth="xs">
			{!props.isAuth && <Redirect to='/login' />}
			<CssBaseline />
			<div className={classes.paper}>
				<Button
					variant="contained"
					color="secondary"
					size="large"
					onClick={logoutSubmit}
				>
					Выйти
				</Button>
			</div>
		</Container>
	)
};

const mapStateToProps = state => {
	return {
		isAuth: state.Auth.isAuth
	}
};
export default connect(mapStateToProps, {logout})(Home);