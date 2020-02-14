import {connect} from 'react-redux';
import Search from './search';
import { fetchSpaces } from '../../actions/space_action';
import { updateFilter } from '../../actions/filter_action';

const mSTP = state => ({
        spaces: Object.values(state.entities.spaces),
        totalPages: state.ui.page.totalPages
})

const mDTP = dispatch => ({
    fetchSpaces: payLoad => dispatch(fetchSpaces(payLoad)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(Search);

