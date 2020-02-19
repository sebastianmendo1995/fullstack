import {RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_action';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;

    switch (action.type) {
        case RECEIVE_REVIEWS:
            nextState = Object.assign({} , state);
            action.reviews.forEach(review => nextState[review.id] = review);
            return nextState;
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review});
        case REMOVE_REVIEW:
            nextState = Object.assign({}, state);
            delete nextState[action.review.id];
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;