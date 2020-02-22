import {connect} from 'react-redux';
import ShowSpace from './show_space';
import {fetchSpace} from '../../actions/space_action';
import {selectSpace} from '../../reducers/selectors';
import {requestReviews} from '../../actions/review_action';

const mSTP = (state, {match}) => {
    const spaceId = parseInt(match.params.spaceId);
    const space = selectSpace(state.entities, spaceId);
    const reviews = state.reviews
    return {
        spaceId,
        space,
        reviews
    }
}

const mDTP = dispatch => ({
    requestReviews: spaceId => dispatch(requestReviews(spaceId)),
    fetchSpace: spaceId => dispatch(fetchSpace(spaceId))
})

export default connect(mSTP, mDTP)(ShowSpace)