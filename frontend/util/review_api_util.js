export const fetchReviews = spaceId => (
    $.ajax({
        method: 'GET',
        url: `/api/spaces/${spaceId}/reviews`
    })
);

export const createReview = (spaceId, review) => (
    $.ajax({
        method: 'POST',
        url: `/api/todos/${spaceId}/steps`,
        data: { review }
    })
);

export const updateReview = review => (
    $.ajax({
        method: 'PATCH',
        url: `/api/steps/${review.id}`,
        data: { review }
    })
);

export const destroyReview = review => (
    $.ajax({
        method: 'DELETE',
        url: `/api/steps/${review.id}`
    })
);