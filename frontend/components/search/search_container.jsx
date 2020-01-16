import {connect} from 'react-redux';
import Search from './search';
import { fetchSpaces } from '../../actions/space_action';
import { updateFilter } from '../../actions/filter_action';

const mSTP = state => {
    // debugger
    return {
        spaces: Object.values(state.entities.spaces),
        totalPages: state.ui.page.totalPages,
        bounds: state.ui.filters.bounds,
        maxCapacity: state.ui.filters.maxCapacity,
        maxPrice: state.ui.filters.maxPrice
    }
}

const mDTP = dispatch => ({
    fetchSpaces: payLoad => dispatch(fetchSpaces(payLoad)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(Search);