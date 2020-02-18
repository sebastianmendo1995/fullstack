import React from 'react';
import SpaceMap from '../space_map/space_map';
import SpaceIndex from './space_index';
import FilterForm from './filter_form';

// const Search = ({ spaces, totalPages, fetchSpaces, updateFilter, currentUser, fetchActivities,  }) => 
class Search extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.location.state.activity && this.props.location.state.city && this.props.location.state.date) {
            console.log(this.props.location.state.date)
            return (
                <div className='spaces-container'>
                    <div className='container-filters'>
                        <FilterForm
                            totalPages={this.props.totalPages}
                            updateFilter={this.props.updateFilter}
                            fetchActivities={this.props.fetchActivities}
                            activity={this.props.location.state.activity}
                            city={this.props.location.state.city}
                            date={this.props.location.state.date}
                        />
                    </div>
                    <div className='spaces'>
                        <SpaceMap
                            spaces={this.props.spaces}
                            updateFilter={this.props.updateFilter}
                        />
                        <SpaceIndex
                            spaces={this.props.spaces}
                            fetchSpaces={this.props.fetchSpaces}
                            totalPages={this.props.totalPages}
                            updateFilter={this.props.updateFilter}
                            currentUser={this.props.currentUser}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className='spaces-container'>
                    <div className='container-filters'>
                        <FilterForm
                            totalPages={this.props.totalPages}
                            updateFilter={this.props.updateFilter}
                            fetchActivities={this.props.fetchActivities}
                        />
                    </div>
                    <div className='spaces'>
                        <SpaceMap
                            spaces={this.props.spaces}
                            updateFilter={this.props.updateFilter}
                        />
                        <SpaceIndex
                            spaces={this.props.spaces}
                            fetchSpaces={this.props.fetchSpaces}
                            totalPages={this.props.totalPages}
                            updateFilter={this.props.updateFilter}
                            currentUser={this.props.currentUser}
                        />
                    </div>
                </div>
            )
        }
    }
    
}

export default Search;