import {connect} from 'react-redux';
import Listing from './listing';
import {fetchSpace, deleteSpace} from '../../actions/space_action';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    deleteSpace: spaceId => dispatch(deleteSpace(spaceId)),
    fetchSpace: spaceId => dispatch(fetchSpace(spaceId))
})

export default connect(mSTP, mDTP)(Listing);