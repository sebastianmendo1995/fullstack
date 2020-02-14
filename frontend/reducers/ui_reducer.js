import { combineReducers } from 'redux';
import modal from './modal_reducer';
import PageReducer from './pages_reducer';
import filterReducer from './filter_reducer';

export default combineReducers({
    modal,
    page: PageReducer,
    filters: filterReducer
});
