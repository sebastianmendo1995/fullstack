import React from 'react';
import SpaceMap from '../space_map/space_map';
import SpaceIndex from './space_index';
import FilterForm from './filter_form';

const Search = ({ spaces, totalPages,fetchSpaces, updateFilter, bounds, maxCapacity, maxPrice }) => {
    return(
        <div className='spaces-container'>
            <div className='container-filters'>
                <FilterForm
                    totalPages={totalPages}
                    updateFilter={updateFilter}
                />
            </div>
            <div className='spaces'>
                <SpaceMap 
                    spaces={spaces}
                    updateFilter={updateFilter}
                />
                <SpaceIndex 
                    spaces={spaces}
                    fetchSpaces={fetchSpaces} 
                    totalPages={totalPages}
                    bounds={bounds}
                    maxCapacity={maxCapacity}
                    maxPrice = {maxPrice}
                    updateFilter={updateFilter}
                />
            </div>
        </div>
    )
}

export default Search;