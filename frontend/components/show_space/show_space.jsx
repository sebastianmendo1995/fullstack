import React from 'react';
import {Link} from 'react-router-dom';


class ShowSpace extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slide: 1
        }
    }

    componentDidMount(){
        this.props.fetchSpace(this.props.match.params.spaceId)
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
        let space = this.props.space ;

        return(
            <div className='show-content-container'>
                <div className='show-content'>

                    <div className='show-carousel'>
                            <div className='carousel-container'>
                                {
                                    (space) ? (
                                        space.photoUrls.map((photoURL, idx) => (
                                            <div className='fade' key={`${space.id}-${idx}`}>
                                                    {
                                                        (this.state.slide === idx + 1) ? (
                                                            <img className={`slider-img`} src={window.gotyourback} />
                                                        ) : (
                                                            <img className={`slider-img hidden`} src={window.gotyourback} />
                                                        )
                                                    }
                                            </div>
                                        ))
                                    )  : null
                                }
                            </div>
                            <a className="prev-show" onClick={() => this.handleClick(-1)}>&#10094;</a>
                            <a className="next-show" onClick={() => this.handleClick(1)}>&#10095;</a>
                            <div className='save-and-share'>
                                <ul>
                                    
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default ShowSpace;