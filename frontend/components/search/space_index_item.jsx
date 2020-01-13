import React from 'react';
import { Link } from 'react-router-dom';

const SpaceIndexItem = ({ space }) => {
    

    return (
        <div className='space-component'>
            <div className="slideshow-container">
            {
                // space.photoUrls.map( (photoURL, idx) => (
                        <div className="mySlides fade">
                            <div className="numbertext">1</div>
                            <img src={space.photoUrls[0]} />
                        </div>
                // ))
            }
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </div>

            <div className='info-box'>
                <div className='info-space-title'>
                    <h5>{space.title}</h5>
                </div>
                <div className='info-row'>
                    <div className='review-section'>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SpaceIndexItem;