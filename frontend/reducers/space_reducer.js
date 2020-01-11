import { RECEIVE_ALL_SPACES, RECEIVE_SPACE, REMOVE_SPACE } from '../actions/space_action';

const SpaceReducer = (state ={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_SPACES:
            nextState = action.spaces
            return nextState;
        case RECEIVE_SPACE:
            nextState[action.space.id] = action.space
            return nextState
        case REMOVE_SPACE:
            delete nextState[action.spaceId]
            return nextState
        default:
            return state;
    }
}

export default SpaceReducer;