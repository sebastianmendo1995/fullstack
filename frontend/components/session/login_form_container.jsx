import { connect } from 'react-redux';
import { logIn, deleteErrors } from '../../actions/session_action';
import SessionLoginForm from './session_login_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = (state) => ({
    errors: state.errors.session.responseJSON,
    formType: 'login/'
})

const mDTP = dispatch => ({
    deleteErrors: () => dispatch(deleteErrors()),
    processForm: (formUser) => dispatch(logIn(formUser)),
    openSignUp: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionLoginForm);