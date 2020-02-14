import React from 'react';

const ShowForm = ( {space} ) => (
    <form>
        <label>Date {`&`} Time
            <input
                className='datepicker_input'
                type="date"
                
            />
        </label>
        <div className='dropdown-container'>
            <div>
                <button className='btn dropdown-btn btn-hours'>
                    <span className='dropdown-value'>start time</span>
                    <i className="down-arrow"></i>
                </button>
                <div className='hidden'>
                    <div className='dropdown-container'>
                        <ul>
                            {
                                // HERE GOES THE HOURS OF THE DROPDOWN
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn dropdown-btn btn-hours'>
                    <span className='dropdown-value'>close time</span>
                    <i className='down-arrow'></i>
                </button>
                <div className='hidden'>
                    <div className='dropdown-container'>
                        <ul>
                            {
                                // HERE GOES THE HOURS OF THE DROPDOWN
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='extend-day'>
            <p>Extend a day</p>
        </div>
        <div className='calculate-total'>

        </div>
        <button className='btn btn-booking'>
            Start Booking
        </button>
    </form>
)

export default ShowForm;