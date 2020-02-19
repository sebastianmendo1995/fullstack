import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


// SYNC
const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview =  review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = review => ({
    type: REMOVE_REVIEW,
    review
})

// ASYNC

export const requestReviews = spaceId => dispatch => (
    ReviewAPIUtil.fetchReviews(spaceId)
        .then(reviews => dispatch(receiveReviews(reviews)))
)

export const createReview = (spaceId, review) => dispatch => (
    ReviewAPIUtil.createReview(spaceId, review)
        .then(review => dispatch(receiveReview(review)))
)

export const updateReview = review => dispatch => (
    ReviewAPIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const destroyReview = review => dispatch => (
    ReviewAPIUtil.destroyReview(review)
        .then(review => dispatch(removeReview(review)))
)
