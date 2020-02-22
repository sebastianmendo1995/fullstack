import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, updateReview, destroyReview } from '../../actions/review_action';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        spaceId: ownProps.match.params.spaceId
    }
}

const mDTP = dispatch => ({
    createReview: (spaceId, review) => dispatch(createReview(spaceId, review)),
    updateReview: review => dispatch(updateReview(review)),
    destroyReview: review => dispatch(destroyReview(review)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ReviewForm);