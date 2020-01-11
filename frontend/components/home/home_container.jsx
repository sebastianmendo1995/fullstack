import {connect} from 'react-redux';
import Home from './home';
import { fetchActivities } from '../../actions/activity_action';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    activities: Object.values(state.entities.activities)
})

const mDTP = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities()),
})

export default connect(mSTP, mDTP)(Home);