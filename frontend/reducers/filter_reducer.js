import { UPDATE_FILTER } from '../actions/filter_action';

const defaultFilters = Object.freeze({
    bounds: {},
    maxCapacity: 10000000,
    maxPrice: 10000000,
    page: 1
});


const filterReducer = ( state = defaultFilters , action ) => {
    Object.freeze(state);

    if (action.type === UPDATE_FILTER) {
        const newFilter = {
        [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    } else {
        return state;
    }
}

export default filterReducer;