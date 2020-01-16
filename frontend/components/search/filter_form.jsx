import React from 'react';

const handleChange = (filter, updateFilter) => e => {
    // debugger
    return updateFilter(filter, parseInt(e.currentTarget.value))
}



const FilterForm = ( {maxCapacity, maxPrice, updateFilter} ) => (
        <div className='filter-tabs'>
            <div className='filter-container'>
                <div>
                    <i className="fas fa-search"></i>
                    <input 
                        type="text"
                        id="activity"
                        placeholder='Enter your activity'
                    />
                </div>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <input
                        type="text"
                        id="location"
                        placeholder='Where?'
                    />
                </div>
                <div>
                    <i className="far fa-calendar"></i>
                    <input 
                        type="date"
                        id="date"
                    />
                </div>
                <div>
                    <select
                        name="attendees"
                        id='attendees'
                        value={maxCapacity}
                        onChange={handleChange('maxCapacity', updateFilter)}
                    >
                        <option selected disabled hidden>Attendees</option>
                        <option value="10">Up to 10</option>
                        <option value="25">Up to 25</option>
                        <option value="50">Up to 50</option>
                        <option value="100">Up to 100</option>
                        <option value="10000">Over 100</option>
                    </select>
                </div>
                <div>
                    <select
                        name="price"
                        id="price"
                        value={maxPrice}
                        onChange={handleChange('maxPrice', updateFilter)}
                    >
                        <option selected disabled hidden>Price per hour</option>
                        <option value="100">Up to $100</option>
                        <option value="250">Up to $250</option>
                        <option value="500">Up to $500</option>
                        <option value="9999999">No Limit</option>
                    </select>
                </div>
            </div>
        </div>
)

export default FilterForm;