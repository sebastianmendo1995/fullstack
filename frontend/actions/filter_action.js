import { fetchSpaces } from './space_action'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => { 
    // debugger; 
    return {
    type: UPDATE_FILTER,
    filter,
    value
}};

export const updateFilter = (filter, value) => (dispatch, getState) => {
    // debugger; 
    dispatch(changeFilter(filter, value));
    return fetchSpaces(getState().ui.filters)(dispatch);
};