import { connect } from 'react-redux';
import Footer from './footer';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

export default connect(mSTP, null)(Footer);