import React from 'react';
import {Link} from 'react-router-dom';
import ListingItem from './listing_item';

class Listing extends React.Component {
    constructor(props){
        super(props);
    } 

    render() {
        let showSpaces;
        let spaces = Object.values(this.props.currentUser.spaces)
        if(spaces.length < 1){
            showSpaces = (
                <div class="mylisting-nospaces">
                    Add a space to get started
                </div>
            )
        } else {
            showSpaces = (
                <div>
                    {
                        spaces.map( space => (
                            <ListingItem 
                                key={space.id}
                                space={space}
                                deleteSpace={this.props.deleteSpace} 
                                fetchSpace = {this.props.fetchSpace}
                            />
                        ))
                    }
                </div>
            )
        }
        // console.log(this.props.currentUser)

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