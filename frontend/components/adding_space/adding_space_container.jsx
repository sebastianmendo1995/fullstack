import { connect } from 'react-redux';
import { createSpace } from '../../actions/space_action';
import AddingSpaceForm from './adding_space_form';
import { fetchActivities } from '../../actions/activity_action'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    activities: Object.values(state.entities.activities)
})

const mDTP = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities()),
    processForm: space => dispatch(createSpace(space))
})

export default connect(mSTP, mDTP)(AddingSpaceForm);