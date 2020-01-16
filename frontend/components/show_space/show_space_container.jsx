import {connect} from 'react-redux';
import ShowSpace from './show_space';
import {fetchSpace} from '../../actions/space_action';
import {selectSpace} from '../../reducers/selectors'

const mSTP = (state, {match}) => {
    const spaceId = parseInt(match.params.spaceId);
    const space = selectSpace(state.entities, spaceId);
    
    return {
        spaceId,
        space
    }
}

const mDTP = dispatch => ({
    fetchSpace: spaceId => dispatch(fetchSpace(spaceId))
})

export default connect(mSTP, mDTP)(ShowSpace)