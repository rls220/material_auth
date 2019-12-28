import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Copyright from './Copyright';
import {renderTextField, renderCheckbox, required} from '../../helpers/auth/formUtils';
import SnackbarsErrorAuthForm from '../../helpers/auth/SnackbarsErrorAuthForm';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(20),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		textTransform: 'none'
	},
}));

const LoginForm = props => {
	const classes = useStyles();
	const { handleSubmit } = props;

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Вход в аккаунт
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Field
						component={renderTextField}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Почта"
						name="email"
						autoComplete="email"
						autoFocus
						validate={[ required ]}
					/>
					<Field
						component={renderTextField}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Пароль"
						type="password"
						id="password"
						autoComplete="current-password"
						validate={[ required ]}
					/>
					<Field
						component={renderCheckbox}
						name="rememberMe"
						label="Запомнить меня"
						color="primary"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}

					>
						Войти в аккаунт
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Забыли пароль?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Еще нет аккаунта? Регистрация"}
							</Link>
						</Grid>
					</Grid>
					<SnackbarsErrorAuthForm />
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	)
};

export default reduxForm({
	form: 'authForm',
	initialValues: {
		email: 'test',
		password: 'test'
	}
})(LoginForm)