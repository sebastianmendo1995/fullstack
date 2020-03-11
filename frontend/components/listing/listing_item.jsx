import React from 'react';
import {Link} from 'react-router-dom';

class ListingItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slide: 1
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchSpace(this.props.space)
    }

    handleDelete(){
        this.props.deleteSpace(this.props.space.id)
    }

    handleClick(offset) {
        let newState = this.state.slide + offset
        if (newState > this.props.space.photoUrls.length) {
            newState = 1
        } else if (newState < 1) {
            newState = this.props.space.photoUrls.length
        }
        this.setState({
            slide: newState
        })
    }

    render(){
        let space = this.props.space
        return(
            <div className='listing-space-item'>
               <div className='listing-space-container'>
                   <div className='carousel-listing'>
                        <div className='slider-container'>
                            {
                                space.photoUrls.map((photoURL, idx) => (
                                    <Link to={`/spaces/${space.id}`} key={`${space.id}-${idx}`}>
                                        <div className='mySlides fade'>
                                            {
                                                (this.state.slide === idx + 1) ? (
                                                    <img className={`slider${idx + 1} slider-img`} src={photoURL} />
                                                ) : (
                                                    <img className={`slider${idx + 1} slider-img hidden`} src={photoURL} />
                                                    )
                                            }
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <a className="prev-listing" onClick={() => this.handleClick(-1)}>&#10094;</a>
                        <a className="next-listing" onClick={() => this.handleClick(1)}>&#10095;</a>
                   </div>
                   <div className='listing-space-info'>
                       <div>
                        <h3>{space.title}</h3>
                        <p>{space.city}, {space.state}</p>
                        <p>from ${space.price}/hr</p>
                       </div>
                   </div>
                   <div className='btn-listing-container'>
                       <button className='btn btn-primary' onClick={this.handleDelete}>Delete Space</button>
                   </div>

               </div>
            </div>
        )
    }
}

export default ListingItem;