import {connect} from 'react-redux';
import Navbar from './navbar';
import {logOut} from '../../actions/session_action';
import {openModal} from '../../actions/modal_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logOut()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Navbar);