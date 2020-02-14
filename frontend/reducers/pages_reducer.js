import { RECEIVE_ALL_SPACES } from "../actions/space_action";


const PageReducer = ( state={} , action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ALL_SPACES:
            return action.totalPages
        default:
            return state;
    }

}

export default PageReducer;