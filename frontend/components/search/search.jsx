import React from 'react';
import SpaceMap from '../space_map/space_map';
import SpaceIndex from './space_index';
import FilterForm from './filter_form';
import queryString from 'query-string';

// const Search = ({ spaces, totalPages, fetchSpaces, updateFilter, currentUser, fetchActivities,  }) => 
class Search extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let filterForm;
        if (this.props.location.state ) {

            filterForm = <FilterForm
                totalPages={this.props.totalPages}
                updateFilter={this.props.updateFilter}
                fetchActivities={this.props.fetchActivities}
                activity={this.props.location.state.activity}
                city={this.props.location.state.city}
                date={this.props.location.state.date}
            />
        } else if (this.props.location.search) {
        
            const values = queryString.parse(this.props.location.search);
            filterForm = <FilterForm
                totalPages={this.props.totalPages}
                updateFilter={this.props.updateFilter}
                fetchActivities={this.props.fetchActivities}
                activity={values.act}
                city={values.city}
                date={values.date}
            />
        }else {
            filterForm = <FilterForm
                totalPages={this.props.totalPages}
                updateFilter={this.props.updateFilter}
                fetchActivities={this.props.fetchActivities}
            />
        }

        return (
            <div className='spaces-container'>
                <div className='container-filters'>
                    {filterForm}
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

export default Search;