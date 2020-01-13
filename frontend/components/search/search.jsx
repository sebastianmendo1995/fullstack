import React from 'react';
import SpaceMap from '../space_map/space_map';
import SpaceIndex from './space_index'

const Search = ({ spaces, fetchSpaces }) => (
    <div className='spaces'>
        <SpaceMap spaces={spaces} />
        <SpaceIndex spaces={spaces} fetchSpaces={fetchSpaces} />
    </div>
)

export default Search;