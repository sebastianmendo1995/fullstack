import {connect} from 'react-redux';
import Review from './review';
import {createReview, updateReview, destroyReview} from '../../actions/review_action';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state,ownProps) => {
    return{
    currentUser: state.entities.users[state.session.id],
    space: ownProps.space
    }
}

const mDTP = dispatch => ({
    createReview: (spaceId, review) => dispatch(createReview(spaceId, review)),
    updateReview: review => dispatch(updateReview(review)),
    destroyReview: review => dispatch(destroyReview(review)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Review);