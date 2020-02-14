import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerMananger from '../../util/marker_manager';

const mapOptions = {
    center: {
        lat: 37.773972,
        lng: -122.431297
    }, // San Francisco coords
    zoom: 12
};

class SpaceMap extends React.Component{
    constructor(props){
        super(props);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
    }

    componentDidMount(){
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerMananger(this.map, this.handleMarkerClick);
        this.MarkerManager.updateMarkers(this.props.spaces);
        this.registerListeners();
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.spaces);
    }

    registerListeners(){
        google.maps.event.addListener(this.map, 'idle', () =>{
            const {north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east},
                southWest: { lat:south, lng: west }
            };
            this.props.updateFilter('bounds', bounds)
        })
    }

    handleMarkerClick(space){
        this.props.history.push(`/spaces/${space.id}`)
    }

    render(){
        return(
            <div className='map index-map' ref='map' onClick={this.handleMapClick}>
                Map
            </div>
        )
    }
}

export default withRouter(SpaceMap);





