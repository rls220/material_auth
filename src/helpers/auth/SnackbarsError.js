import React from "react";
import clsx from 'clsx';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';


const useStyles1 = makeStyles(theme => ({
	error: {
		backgroundColor: theme.palette.error.dark,
	},
	icon: {
		fontSize: 20,
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1),
	},
	message: {
		display: 'flex',
		alignItems: 'center',
	},
}));

function MySnackbarContentWrapper(props) {
	const classes = useStyles1();
	const { className, message, onClose, variant, ...other } = props;

	return (
		<SnackbarContent
			className={clsx(classes[variant], className)}
			aria-describedby="client-snackbar"
			message={
				<span id="client-snackbar" className={classes.message}>
          <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
					{message}
        </span>
			}
			action={[
				<IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
					<CloseIcon className={classes.icon} />
				</IconButton>,
			]}
			{...other}
		/>
	);
}

const useStyles2 = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1),
	},
}));

export default function SnackbarsError(props) {
	const classes = useStyles2();
	let openErrorMessage = false;

	if (props.message) {
		openErrorMessage = true;
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		props.resetMessage();
		openErrorMessage = false;
	};

	return (
		<div>
			<Snackbar
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				open={openErrorMessage}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<MySnackbarContentWrapper
					onClose={handleClose}
					variant="error"
					className={classes.margin}
					message={props.message}
				/>
			</Snackbar>
		</div>
	);
}

