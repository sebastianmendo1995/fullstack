import {RECEIVE_ALL_ACTIVITIES, RECEIVE_ACTIVITY} from '../actions/activity_action';


const ActivityReducer = ( state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_ACTIVITIES:
            nextState = action.activities
            return nextState;
        case RECEIVE_ACTIVITY:
            nextState[action.activity.id] = action.activity
            return nextState;
        default:
            return state;
    }
}

export default ActivityReducer;