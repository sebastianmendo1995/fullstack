import { connect } from 'react-redux';
import SearchModal from './search_modal';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(SearchModal));