
class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(spaces) {
        let newMarkers = {};
        Object.keys(this.markers).forEach(key => { this.markers[key].setMap(null); delete this.markers[key] })
        Object.keys(spaces).forEach(key => {
            if (!this.markers[key]) {
                newMarkers[key] = new google.maps.Marker({
                    position: {
                        lat: spaces[key].lat,
                        lng: spaces[key].lng
                    },
                    map: this.map,
                    title: spaces[key].name,
                    icon: window.marker
                });
            }
        });
        this.markers = newMarkers;
    }
    createMarkerFromSpace(space) {
        const myLatLng = new google.maps.LatLng({ lat: space.lat, lng: space.lng })
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: space.title,
            icon: window.marker
        });
        this.markers[space.id] = marker
        marker.setMap(this.map)
    }

    removeMarker(markerId) {
        const marker = this.markers[markerId];
        marker.setMap(null);
        delete this.markers[markerId];
    }

}
export default MarkerManager;

