import React from 'react';
import {Link} from 'react-router-dom';

class Listing extends React.Component {
    constructor(props){
        super(props);
    } 


    render() {
        let showSpaces;
        if(this.props.currentUser.spaces.length < 1){
            showSpaces = (
                <div class="mylisting-nospaces">
                    Add a space to get started
                </div>
            )
        } else {
            showSpaces = (
                <div>
                    Render all the spaces with the delete bottom
                </div>
            )
        }
        return(
            <div className='main-container'>
                <div className='mylistings-container'>
                    <div className='mylisting-header'>
                        <h2>Listings</h2>
                        <div className='addspace-btn-container'>
                            <div>
                                <Link to='/' className='btn btn-gray-outline'>
                                    <i className="fas fa-gift fa-lg margin-sm-right"></i>
                                    Invite Hosts
                                </Link>
                            </div>
                            <div className='margin-md-left'>
                                <Link to='/add-space' className='btn btn-primary'>
                                    Add a space
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {showSpaces}
            </div>
        )
    }
}

export default Listing;