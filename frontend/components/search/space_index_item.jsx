import React from 'react';
import { Link } from 'react-router-dom';

const range = (min, max) => Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem = ({ checked, colored, value }) => (
    <label className={`rating-y-item ${colored ? 'rating-y-item-selected' : ''}`}>
        <input
            checked={checked}
            className='rating-y-input'
            type="radio"
            value={value} />
    </label>)

const Rating = ({ min, max, value }) => {
    return (
        <div className='rating-y'>
            {range(min, max).map(item => (
                <RatingItem key={item}
                    colored={value >= item}
                    checked={value === item}
                    value={item} />
            ))
            }
        </div>
    )
}

class SpaceIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slide: 1
        }
    }

    handleClick(offset){
        let newState = this.state.slide + offset
        if(newState > this.props.space.photoUrls.length){
            newState = 1
        } else if (newState < 1){
            newState = this.props.space.photoUrls.length
        }
        this.setState({
            slide: newState
        })
    }

    handleSaveBoard(space){
        this.props.currentUser
    }

    render(){
        const space = this.props.space
        const reviews = space.reviews.map(review => review.rating)
        let avg;
            if(reviews.length < 1){
                avg = 0;
            } else {
                avg = reviews.reduce( (prev, curr) => curr += prev ) / reviews.length;
            }
        return (
            <div className='space-component'>
                    <div className="slideshow-container">
                        <div className='slider-container'>
                            {
                                space.photoUrls.map( (photoURL, idx) => (
                                    <Link to={`/spaces/${space.id}`} key={`${space.id}-${idx}`}>
                                        <div className='mySlides fade' >
                                            {
                                                (this.state.slide === idx+1) ? (
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
                        <div className='price-box-wrapper'> 
                            <span>from </span>
                            <span><strong>${space.price}</strong></span>
                            <span> / hr</span>
                        </div>
                        <a className="prev" onClick={() => this.handleClick(-1)}>&#10094;</a>
                        <a className="next" onClick={() => this.handleClick(1)}>&#10095;</a>
                    </div>
        
                    <div className='info-box'>
                        <Link to={`/spaces/${space.id}`}>
                            <div className='info-space-title'>
                                <h5>{space.title}</h5>
                            </div>
                        </Link>
                        <div className='info-row'>
                            <Link to={`/spaces/${space.id}`}>
                                <div className='review-section'>
                                    <div className='review-starts-rebooking'>
                                        <i className="fas fa-user-friends fa-sm"></i>
                                        <p>{space.capacity}</p>
                                        <Rating min={1} max={5}
                                            value={avg}
                                        />
                                        {reviews.length}
                                    </div>
                                </div>
                            </Link>
                            <div className='answer-time'>
                                <Link to={`/spaces/${space.id}`}>
                                    <p>Responds within {Math.round(Math.random()*8)} hrs</p>
                                </Link>
                                <button onClick={() => this.handleSaveBoard(space)}>
                                    {
                                        // this.props.currentUser.boards.includes(space.id) ?
                                        // <i className="fas fa-heart"></i> :
                                        <i className="far fa-heart"></i>
                                    }
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default SpaceIndexItem;