export const selectSpace = ({ spaces }, spaceId) => {
    return spaces[spaceId] 
};

// export const selectReviewsForBench = ({ spaces, reviews }, bench) => {
//     return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };

// export const asArray = ({ spaces }) => (
//     Object.keys(spaces).map(key => spaces[key])
// );
