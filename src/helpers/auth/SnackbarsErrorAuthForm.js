import { resetMessageError } from '../../redux/auth/actions';
import { connect } from "react-redux";
import SnackbarsError from './SnackbarsError';

const mapStateToProps = (state) => ({
	message: state.Auth.error
});
const mapDispatchToProps = (dispatch) => ({
	resetMessage: () => {
		dispatch(resetMessageError())
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarsError);