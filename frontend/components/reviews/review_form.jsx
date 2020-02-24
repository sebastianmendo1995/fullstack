import React from 'react';

const range = (min, max) => Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem = ({ checked, colored, onChange, value }) => (
    <label className={`rating-item ${colored ? 'rating-item-selected' : ''}`}>
        <input
            checked={checked}
            className='rating-input'
            onChange={(e) => {
                onChange(value)
            }}
            type="radio"
            value={value} />
    </label>)

const Rating = ({ min, max, onChange, value }) => {
    return (
        <div className='rating'>
            {range(min, max).map(item => (
                <RatingItem key={item}
                    colored={value >= item}
                    checked={value === item}
                    value={item} onChange={onChange} />
            ))
            }
        </div>
    )
}

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            rebooking: false,
            rating: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }

    handleCancel() {
        this.setState({
            title: '',
            body: '',
            rebooking: false,
            rating: 0
        })
        this.props.closeModal();
    }

    update(field) {
        return e => this.setState({ 
            [field]: e.currentTarget.value 
        });
    };

    handleBooleanInput(type) {
        return e => {
            let newVal;
            if (e.target.checked) {
                newVal = true
            } else {
                newVal = false
            }
            return this.setState({
                [type]: newVal
            })
        }
    }

    render(){
        return(
            <div>
                <div className="modal-banner">
                    <button onClick={this.handleCancel}>x</button>
                </div>
                <div className="top-content">
                    <h3>Review</h3>
                    <p>Share your experience with everyone.</p>
                </div>
                <form onSubmit={this.handleSubmit} className='review-form'>
                    <Rating min={1} max={5}
                        value={this.state.rating}
                        onChange={(rating) => {
                            this.setState({ rating })
                        }} 
                    />

                    <input 
                        type="text"
                        id='review-title'
                        placeholder='Title: Booked a meeting for 7 people.'
                        value={this.state.title}
                        onChange={this.update("title")}  
                    />

                    <textarea
                        id='review-body'
                        placeholder='Write your experience renting this place.'
                        value={this.state.body}
                        onChange={this.update("body")} 
                    />

                    <div className="pretty p-switch p-fill review-rebooking">
                        <input
                            type="checkbox"
                            onClick={this.handleBooleanInput('rebooking')}
                        />
                        <div className="state p-primary">
                            <label>Would you book this place again?</label>
                        </div>
                    </div>

                    <button className='btn btn-review-submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;