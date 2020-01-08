import { connect } from 'react-redux';
import { signUp } from '../../actions/session_action';
import SessionSignupForm from './session_signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = (state) => ({
    errors: state.errors.session.responseJSON,
    formType: 'signup/'
})

const mDTP = dispatch => ({
    processForm: (formUser) => dispatch(signUp(formUser)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Sign Up
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionSignupForm);
