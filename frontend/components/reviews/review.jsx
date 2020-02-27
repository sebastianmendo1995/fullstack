import React from 'react';

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


class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allReviews: false,
            index: 3
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReviews = this.handleReviews.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        if(this.props.currentUser){
            this.props.openModal('review')
        } else {
            this.props.openModal('login')
        }
    }

    handleReviews(){
        if(this.state.allReviews){
            this.setState({
                allReviews: false,
                index: 3
            })
        } else {
            this.setState({
                allReviews: true,
                index: Object.values(this.props.reviews).length + 1
            })
        }
    }

    render(){
        const reviews = Object.values(this.props.reviews)
        const reviewsButton = (this.state.allReviews) ? 
            <button className='btn btn-default' onClick={this.handleReviews}>Show Less</button> : 
            <button className='btn btn-default' onClick={this.handleReviews}>Show More Comments</button>

        return (
            <div className='review-row'>
                <ul>
                    {
                        reviews.slice(0,this.state.index).map(review => {
                            let rebookingText;
                            rebookingText = review.rebooking ? 'Yes, I would book again.' : 'No, I would not book again.'
                            let icon = review.rebooking ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>
                            return(
                                <div className='review-content' key= { review.id }>
                                    <div className='review-user-picture'>
                                        <img src={window.user} alt="" />
                                    </div>
                                    <li >
                                        <h4>{review.title}</h4>
                                        <h5>User Job Title</h5>
                                        <div className='review-starts-rebooking'>
                                            <Rating min={1} max={5}
                                                value={review.rating}
                                            />
                                            {icon}<span>{rebookingText}</span>
                                        </div>
                                        <p>{review.body}</p>
                                        <span className='span-review'>{review.createdAt.slice(0,10)}</span>
                                    </li>
                                </div>
                                
                            )
                        })
                    }
                </ul>
                <div className='review-button-container'>
                    {reviewsButton}
                </div>
                <button className='btn btn-review' onClick={this.handleClick}>Make a Review</button>
            </div>
        )
    }
}

export default Review;