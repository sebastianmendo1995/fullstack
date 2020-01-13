import React from 'react';
import { withRouter } from 'react-router-dom';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

const mapOptions = {
    center: {
        lat: 37.773972,
        lng: -122.431297
    }, // San Francisco coords
    zoom: 13
};

class SpaceMap extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);

    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div className='map' ref='map'>
                Map
            </div>
        )
    }
}

export default withRouter(SpaceMap);
