import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerMananger from '../../util/marker_manager';

class ShowMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, {
            center: {
                lat: this.props.space.lat,
                lng: this.props.space.lng
            },
            zoom: 15
        });
    }

    render() {
        return (
            <div className='map show-map' ref='map'>
                Map
            </div>
        )
    }
}

export default withRouter(ShowMap);
