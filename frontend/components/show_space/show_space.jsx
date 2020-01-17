import React from 'react';
import {Link} from 'react-router-dom';
import ShowForm from './show_form';
import ShowMap from './show_map';
import Footer from '../footer/footer';

class ShowSpace extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slide: 1
        }
    }

    componentDidMount(){
        this.props.fetchSpace(this.props.match.params.spaceId)
    }

    handleClick(offset) {
        let newState = this.state.slide + offset
        if (newState > this.props.space.photoUrls.length) {
            newState = 1
        } else if (newState < 1) {
            newState = this.props.space.photoUrls.length
        }
        this.setState({
            slide: newState
        })
    }

    render(){
        let space = this.props.space ;
        if (!space) return null

        let stars = [];
        for(let i=0; i<5; i++){
            stars.push(
                <img src={window.star} />
            )
        }

        let reviews = [];
        for (let i = 0; i < 3; i++) {
            reviews.push(
                <div key={i} className='userId-review'>
                    <div className='user-image'>
                        <img src={user}/>
                    </div>
                    <div className='user-comment'>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."<span>Username</span></p>
                    </div>
                </div>
            )
        }

        let open = space.openTime
        let close = space.closeTime


        return(
            <div>
                <div className='show-content-container'>
                    <div className='show-content'>
                        <div className='show-carousel'>
                            <div className='carousel-container'>
                                {
                                    space.photoUrls.map((photoURL, idx) => (
                                        <div className='fade' key={`${space.id}-${idx}`}>
                                                {
                                                    (this.state.slide === idx + 1) ? (
                                                        <img className={`slider-img`} src={window.temporal} />
                                                    ) : (
                                                        <img className={`slider-img hidden`} src={window.temporal} />
                                                    )
                                                }
                                        </div>
                                    ))
                                }
                            </div>
                            <a className="prev-show" onClick={() => this.handleClick(-1)}>&#10094;</a>
                            <a className="next-show" onClick={() => this.handleClick(1)}>&#10095;</a>
                            <div className='save-and-share'>
                                <ul className='list-inline'>
                                    <li className='v-center'>
                                    <button className='btn btn-white share-btn'>
                                        <i className="fas fa-external-link-alt"></i>
                                        Share
                                    </button>
                                    </li>
                                    <li className='v-center'>
                                        <button className='btn btn-white save-btn'>
                                        <i className="far fa-heart"></i>
                                            Save
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <section className='info-show-section'>
                            <div className='info-body'>
                                <div className='row-info'>
                                    <div className='space-information'>
                                        <h1>{space.title}</h1>
                                        <p><i className="fas fa-map-marker-alt"></i> {`${space.address}, ${space.city}, ${space.state}`}</p>
                                        <ul>
                                            <li>
                                                <div className='stars-container'>
                                                    {stars}
                                                    <span>324 reviews</span>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={window.person} alt=""/>
                                                <span>{space.capacity} people</span>
                                            </li>
                                            <li>
                                                <img src={window.time} alt="" />
                                                <span>4 min</span>
                                            </li>
                                            <li>
                                                <img src={window.person} alt="" />
                                                <span>{space.square_ft} sq ft</span>
                                            </li>
                                        </ul>
                                        <div className='first-reviews'>
                                            {reviews}
                                        </div>
                                        <div className='view-comments'>
                                            <button className='btn btn-view-reviews'>Read all reviews</button>
                                        </div>
                                    </div>
                                    <div className='info-profile-image'>
                                        <section>
                                            <div className='row-img'>
                                                <img src={window.user} alt=""/>
                                            </div>
                                            <div className='row-name'>
                                                <p>{`${space.hostFirstName} ${space.hostLastName}`}</p>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <section className='book-space'>
                                    <div className='book-listing'>
                                        <div className='row-price'>
                                            <span><h1>{`$${space.price}`}</h1>/hr</span>
                                        </div>
                                        <div className='row-form'>
                                            <div className='fee-cal'>
                                                <div className='select-date-time'>
                                                    <ShowForm space={space}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className='amenities-section'>
                            <div className='listingAmenities'>
                                <div className='amenities-content'>
                                    <h2>Included in your booking</h2>
                                    <div className='amenities-features'>
                                        <h4>Amanities</h4>
                                        <div className='amenities'>
                                            <div><img src={window.wifi}/> WiFi</div>
                                            <div><img src={window.table} />Table</div>
                                            <div><img src={window.chair}/>Chairs</div>
                                            <div><img src={window.projector}/>Projector</div>
                                            <div><img src={window.screen}/>Screen</div>
                                            <div><img src={window.whiteboard}/>Whiteboard</div>
                                            <div><img src={window.conference_phone}/>Conference Phone</div>
                                            <div><img src={window.printer}/>Printer</div>
                                            <div><img src={window.coffee}/>Coffee</div>
                                        </div>
                                        <h4>Features</h4>
                                        <div className='features'>
                                            <div><img src={window.restrooms}/>Restrooms</div>
                                            <div><img src={window.breakout_room}/>Breakout Space</div>
                                            <div><img src={window.kitchen}/>Kitchen</div>
                                            <div><img src={window.public_transit}/>Public Transportation</div>
                                            <div><img src={window.handicap_access}/>Wheelchair Accessible</div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='about-section'>
                            <div className='about-container'>
                                <div className='about-content'>
                                    <h2>About the Space</h2>
                                    <p><span>{space.description}</span></p>
                                </div>
                            </div>
                        </section>
                        <section className='location-section'>
                            <div className='location-container'>
                                <div className='location-content'>
                                    <h2>Location</h2>
                                    <ShowMap space={space}/>
                                </div>
                            </div>
                        </section>
                        {
                            space.rules ? (
                                <section className='rules-section'>
                                    <div className='rules-container'>
                                        <div className='rules-content'>
                                            <h2>Rules</h2>
                                            <p><span>{space.rules}</span></p>
                                        </div>
                                    </div>
                                </section>
                            ) : null
                        }
                        <section className='operation-section'>
                            <div className='operation-container'>
                                <div className='operation-content'>
                                    <h2>Operation Hours</h2>
                                    <p>Open: {space.openTime.slice(11,16)} - Close: {space.closeTime.slice(11,16)}</p>
                                    <p className='days'>
                                        {space.monday ? <span>Monday</span> : null}
                                        {space.tuesday ? <span>Tuesday</span> : null}
                                        {space.wednesday ? <span>Wednesday</span> : null}
                                        {space.thrusday ? <span>Thrusday</span> : null}
                                        {space.friday ? <span>Friday</span> : null}
                                        {space.saturday ? <span>Saturday</span> : null}
                                        {space.sunday ? <span>Sunday</span> : null}
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className='cancel-policy-section'>
                            <div className='cancel-policy-container'>
                                <div className='cancel-policy-content'>
                                    <h2>Cancellation Policy</h2>
                                    <h4>Grace Period</h4>
                                    <p>All Bookings are subject to Peerspace’s Grace Period 
                                        policy which provides a full refund for Bookings cancelled
                                        within 24 hours from receipt of a Booking Confirmation but 
                                        no later than 48 hours prior to the Event start time.</p>
                                    <h4>Flexible</h4>
                                    <p>Guests may cancel their Booking until 7 days before the event
                                        start time and will receive a full refund (including all Fees) 
                                        of their Booking Price. Guests may cancel their Booking between 
                                        7 days and 24 hours before the event start time and receive a 50%
                                        refund (excluding Fees) of their Booking Price. Booking cancellations 
                                        submitted less than 24 hours before the Event start time are not refundable.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <Footer />
            </div>


            
        )
    }
}

export default ShowSpace;