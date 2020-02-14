import  {connect} from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import SpaceForm from './space_form';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(SpaceForm);