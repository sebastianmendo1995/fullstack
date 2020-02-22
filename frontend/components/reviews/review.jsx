import React from 'react';

class Review extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        if(this.props.currentUser){
            this.props.openModal('review')
        } else {
            this.props.openModal('login')
        }
    }

    render(){
        const reviews = Object.values(this.props.reviews)

        return (
            <div className='review-row'>
                <ul>
                    {
                        reviews.map(review => {
                            let rebookingText;
                            rebookingText = review.rebooking ? 'Yes, I would book again.' : 'No, I would not book again.'
                            let icon;
                            icon = review.rebooking ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>
                            return(
                                <div key= { review.id }>
                                    <div>
                                        <img src={window.user} alt="" />
                                    </div>
                                    <li >
                                        <h4>{review.title}</h4>
                                        <h5>User Job Title</h5>
                                        {icon}<span>{rebookingText}</span>
                                        <p>{review.body}</p>
                                        <span className='span-review'>{review.createdAt.slice(0,10)}</span>
                                    </li>
                                </div>
                                
                            )
                        })
                    }
                </ul>
                <br/>
                <hr />
                <br/>
                <button className='btn btn-review' onClick={this.handleClick}>Make a Review</button>
            </div>
        )
    }
}

export default Review;