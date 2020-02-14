import React from 'react';
import {Link, withRoutes} from 'react-router-dom';

const ActivityIndexItem = ( {activity} ) => {
    const image_name = activity.name.split(' ').join('').toLowerCase();
    return (
        <div className="temp">
            <div className='collection-image-container'>
                <img className='collection-image' src={window[image_name]} />
            </div>
            <div className='caption'>
                <h3>{activity.name}</h3>
            </div>
        </div>
    )
}

export default ActivityIndexItem;