import { connect } from 'react-redux';
import { signUp, deleteErrors } from '../../actions/session_action';
import SessionSignupForm from './session_signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = (state) => ({
    errors: state.errors.session.responseJSON,
    formType: 'signup/'
})

const mDTP = dispatch => ({
    deleteErrors: () => dispatch(deleteErrors()),
    processForm: (formUser) => dispatch(signUp(formUser)),
    openLogIn: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionSignupForm);
