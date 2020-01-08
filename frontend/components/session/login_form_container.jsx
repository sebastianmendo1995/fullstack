import { connect } from 'react-redux';
import { logIn } from '../../actions/session_action';
import SessionLoginForm from './session_login_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = (state) => ({
    errors: state.errors.session.responseJSON,
    formType: 'login/'
})

const mDTP = dispatch => ({
    processForm: (formUser) => dispatch(logIn(formUser)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionLoginForm);