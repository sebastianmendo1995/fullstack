import {connect} from 'react-redux';
import Search from './search';
import { fetchSpaces } from '../../actions/space_action';
import { updateFilter } from '../../actions/filter_action';
import { fetchActivities } from '../../actions/activity_action';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    spaces: Object.values(state.entities.spaces),
    totalPages: state.ui.page.totalPages
})

const mDTP = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities()),
    fetchSpaces: payLoad => dispatch(fetchSpaces(payLoad)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(Search);

