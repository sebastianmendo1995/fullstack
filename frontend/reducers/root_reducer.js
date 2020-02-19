import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducers';
import uiReducer from './ui_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    reviews: reviewsReducer,
    ui: uiReducer
});
