import {connect} from 'react-redux';
import Search from './search';
import { fetchSpaces } from '../../actions/space_action';


const mSTP = state => ({
    spaces: Object.values(state.entities.spaces)
})

const mDTP = dispatch => ({
    fetchSpaces: () => dispatch(fetchSpaces())
})

export default connect(mSTP, mDTP)(Search);