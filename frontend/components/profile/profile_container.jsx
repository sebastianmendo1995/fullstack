import { connect } from 'react-redux';
import Profile from './profile';
import { updateUser } from '../../actions/session_action'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    updateUser: (userId, formData) => dispatch(updateUser(userId, formData))
})

export default connect(mSTP, mDTP)(Profile);