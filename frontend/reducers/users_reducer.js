import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_action';

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    }
}