import React from 'react';
import { Route, Link } from 'react-router-dom';
import FooterContainer from '../footer/footer_container';

class SpaceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            address: '',
            unit: '',
            city: '',
            state: '',
            zip_code: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {   
        e.preventDefault();
        if(!this.props.currentUser){
            this.props.openModal('login')
        } else {
            let {
                address,
                city,
                unit,
                state,
                zip_code
            } = this.state
            
            this.props.history.push(`/finish-adding-space?address=${address}&city=${city}&unit=${unit}&state=${state}&zip_code=${zip_code}`)
        }
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }


    render(){
        return (
            <div>
                <section className='add-space-container'>
                    <div className='hero-container'>
                        <div className='hero-content-container'>
                            <div className='hero-content-left'>
                                <div>
                                    <div className='row-title'>
                                        <h1>Earn money as a <br/> Peerspace host</h1>
                                    </div>
                                    <div className='row-text'>
                                        <p>Join thousands of hosts renting their space for meetings, events, film and photo shoots</p>
                                    </div>
                                    <div className='row-form'>
                                        <form onSubmit={this.handleSubmit} className='space-form' >
                                            <div className='search-input-container'>
                                                <input 
                                                    type="text"
                                                    placeholder='Address'
                                                    value={this.state.address}
                                                    onChange= {this.update('address')}
                                                    id='address'
                                                    required
                                                />
                                                <input 
                                                    type="text"
                                                    placeholder='Unit'
                                                    value={this.state.unit}
                                                    onChange={this.update('unit')}
                                                    id='unit'
                                                    required
                                                />
                                            </div >
                                            <div className='search-input-container'>
                                                <input 
                                                    type="text"
                                                    placeholder='City'
                                                    value={this.state.city}
                                                    onChange={this.update('city')}
                                                    id='city'
                                                    required
                                                />
                                                <select 
                                                    name="state" 
                                                    id="state"
                                                    value={this.state.state}
                                                    onChange={this.update('state')}
                                                    required="required"
                                                >
                                                    <option defaultValue value="" disabled>State</option>
                                                    <option value="AL">AL</option>
                                                    <option value="AK">AK</option>
                                                    <option value="AS">AS</option>
                                                    <option value="AZ">AZ</option>
                                                    <option value="AR">AR</option>
                                                    <option value="CA">CA</option>
                                                    <option value="CO">CO</option>
                                                    <option value="CT">CT</option>
                                                    <option value="DE">DE</option>
                                                    <option value="DC">DC</option>
                                                    <option value="FM">FM</option>
                                                    <option value="FL">FL</option>
                                                    <option value="GA">GA</option>
                                                    <option value="GU">GU</option>
                                                    <option value="HI">HI</option>
                                                    <option value="ID">ID</option>
                                                    <option value="IL">IL</option>
                                                    <option value="IN">IN</option>
                                                    <option value="IA">IA</option>
                                                    <option value="KS">KS</option>
                                                    <option value="KY">KY</option>
                                                    <option value="LA">LA</option>
                                                    <option value="ME">ME</option>
                                                    <option value="MH">MH</option>
                                                    <option value="MD">MD</option>
                                                    <option value="MA">MA</option>
                                                    <option value="MI">MI</option>
                                                    <option value="MN">MN</option>
                                                    <option value="MS">MS</option>
                                                    <option value="MO">MO</option>
                                                    <option value="MT">MT</option>
                                                    <option value="NE">NE</option>
                                                    <option value="NV">NV</option>
                                                    <option value="NH">NH</option>
                                                    <option value="NJ">NJ</option>
                                                    <option value="NM">NM</option>
                                                    <option value="NY">NY</option>
                                                    <option value="NC">NC</option>
                                                    <option value="ND">ND</option>
                                                    <option value="MP">MP</option>
                                                    <option value="OH">OH</option>
                                                    <option value="OK">OK</option>
                                                    <option value="OR">OR</option>
                                                    <option value="PW">PW</option>
                                                    <option value="PA">PA</option>
                                                    <option value="PR">PR</option>
                                                    <option value="RI">RI</option>
                                                    <option value="SC">SC</option>
                                                    <option value="SD">SD</option>
                                                    <option value="TN">TN</option>
                                                    <option value="TX">TX</option>
                                                    <option value="UT">UT</option>
                                                    <option value="VT">VT</option>
                                                    <option value="VI">VI</option>
                                                    <option value="VA">VA</option>
                                                    <option value="WA">WA</option>
                                                    <option value="WV">WV</option>
                                                    <option value="WI">WI</option>
                                                    <option value="WY">WY</option>
                                                </select>
                                                <input 
                                                    type="text"
                                                    placeholder="Zip"
                                                    value={this.state.zip_code}
                                                    onChange={this.update('zip_code')}
                                                    id='zip'
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className='btn btn-space-form'>Get Started</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='hero-content-right'>
                                <img src={window.getstarted} height="100%" width="100%" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='fill-your-space'>
                    <div className="fill-row">
                        <h2>Fill your space's downtime</h2>
                    </div>
                    <div className="fill-row">
                        <div className='center-container'>
                            <p>Everyone from professional photographers and yoga teachers, to Fortune 500 companies need places to meet, create, and celebrate. Get your space in front of the most people searching for spaces like yours.</p>
                        </div>
                    </div>
                    <div className="fill-row">
                        <div className='center-container data-facts'>
                            <div className='center-fact-container'>
                                <div className='fact-value'>
                                    <h2> 13,787</h2>
                                </div>
                                <div className='fact-name'>
                                    <p>Meetings</p>
                                </div>
                            </div>
                            <div className='center-fact-container'>
                                <div className='fact-value'>
                                    <h2> 10,798</h2>
                                </div>
                                <div className='fact-name'>
                                    <p>Film shoots</p>
                                </div>
                            </div>
                            <div className='center-fact-container'>
                                <div className='fact-value'>
                                    <h2> 9,056</h2>
                                </div>
                                <div className='fact-name'>
                                    <p>Photo shoots</p>
                                </div>
                            </div>
                            <div className='center-fact-container'>
                                <div className='fact-value'>
                                    <h2> 17,499</h2>
                                </div>
                                <div className='fact-name'>
                                    <p>Events</p>
                                </div>
                            </div>
                            <div className='center-fact-container'>
                                <div className='fact-value'>
                                    <p>And thousands of others</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='how-to-share'>
                    <div className='how-to-share-grid'>
                        <div className='row-share'>
                            <img className='share-img' src={window.hostshare} alt=""/>
                        </div>
                        <div className='row-share share-text'>
                            <h2>Choose how to share</h2>
                            <p>You love your space, so you control how you share it. Open your doors to meetings during the week, dinners at night, or just film shoots on the weekends – whatever works best for you.</p>
                            <p>Hosts receive <span className="text-red heavy"><strong>10 inquiries per month</strong></span>, on average, so you can choose what works for you.</p>
                        </div>
                    </div>
                </section>

                <section className='how-hosting-works'>
                    <div className='container-how-works'>
                        <div className='how-works-wrapper'>
                            <div>
                                <h2>How hosting works</h2>
                            </div>
                            <div className='how-hosting-works-content'>
                                <div className='row-how-works'>
                                    <div className='number-title-wrapper'>
                                        <p className='circle-number'>1</p>   
                                    </div>
                                    <div className='how-it-works-title'>
                                        <h3>List your space for free</h3>
                                    </div>
                                    <div className='how-it-works-p'>
                                        <p>Set your price, add photos and details, then your listing is ready to be seen by millions of people searching for space.</p>
                                    </div>
                                </div>
                                <div className='row-how-works'>
                                    <div className='number-title-wrapper'>
                                        <p className='circle-number'>2</p>   
                                    </div>
                                    <div className='how-it-works-title'>
                                        <h3>Welcome guests to your space</h3>
                                    </div>
                                    <div className='how-it-works-p'>
                                        <p>Message with guests and accept bookings through the Peerspace platform. Once you confirm, your guests will receive information on how to get there and details like your wifi code.</p>
                                    </div>
                                </div>
                                <div className='row-how-works'>
                                    <div className='number-title-wrapper'>
                                        <p className='circle-number'>3</p>   
                                    </div>
                                    <div className='how-it-works-title'>
                                        <h3>Get paid every time</h3>
                                    </div>
                                    <div className='how-it-works-p'>
                                        <p>Guests are charged upfront through Peerspace’s secure payment system. Your payout is directly deposited after each booking, minus our 15% service fee.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='every-space'>
                    <div className='container-every-space'>
                        <div className='row-every-space'>
                            <h2>Every space belongs on Peerspace</h2>
                        </div>
                        <div className='row-every-space-p'>
                            <p>Spaces of all shapes, styles, and sizes do well on Peerspace – from empty storefronts to industrial lofts. Afterall, it’s the diversity of options that makes Peerspace special.</p>
                        </div>
                        <div className='every-space-grid'>
                            <div>
                                <div className='every-space-grid-img'>
                                    <img src={window.homes} alt=""/>
                                </div>
                                <div className='every-space-grid-name'>
                                    <p>Homes</p>
                                </div>                              
                            </div>
                            <div>
                                <div className='every-space-grid-img'>
                                    <img src={window.lofts} alt=""/>
                                </div>
                                <div className='every-space-grid-name'>
                                    <p>Lofts</p>
                                </div>                               
                            </div>
                            <div>
                                <div className='every-space-grid-img'>
                                    <img src={window.studios} alt=""/>
                                </div>
                                <div className='every-space-grid-name'>
                                    <p>Studios</p>
                                </div>
                            </div>
                            <div>
                                <div className='every-space-grid-img'>
                                    <img src={window.warehouses} alt=""/>
                                </div>
                                <div className='every-space-grid-name'>
                                    <p>warehouses</p>
                                </div>
                            </div>


                            <div>
                                <div className='every-space-grid-img'>
                                    <img src={window.galleries} alt=""/>
                                </div>
                                <div className='every-space-grid-name'>
                                    <p>Galleries</p>
                                </div>                               
                            </div>
                            <div>
                                <div className='every-space-grid-img'>
                                    <img src={window.bars} alt=""/>
                                </div>
                                <div className='every-space-grid-name'>
                                    <p>Bars</p>
                                </div>                              
                            </div>
                            <div>
                                <div className='every-space-grid-img'>
                                    <img src={window.coworking} alt=""/>
                                </div>
                                <div className='every-space-grid-name'>
                                    <p>Coworking Spaces</p>
                                </div>                               
                            </div>
                            <div>
                                <div className='every-space-grid-img'>
                                    <img src={window.venues} alt=""/>
                                </div> 
                                <div className='every-space-grid-name'>
                                    <p>Event Venues</p>
                                </div>                             
                            </div>
                        </div>
                    </div>

                </section>

                <section className='got-your-back'>
                    <div className='got-your-back-title'>
                        <h2>We've got your back</h2>
                    </div>
                    <div className='container-got-your-back'>
                        <div className='row-got-you-back-content'>
                            <div>
                                <div className='row-how-works'>
                                    <div className='got-your-back-subtitle'>
                                        <i className="far fa-check-circle fa-1x"></i><h3>$1,000,000 liability insurance</h3>
                                    </div>
                                    <div className='how-it-works-p'>
                                        <p>The Peerspace Host Insurance Policy provides coverage for general liability claims up to $1 million.</p>
                                    </div>
                                </div>
                                <div className='row-how-works'>
                                    <div className='got-your-back-subtitle'>
                                        <i className="far fa-check-circle fa-1x"></i><h3>Built on trust</h3>
                                    </div>
                                    <div className='how-it-works-p'>
                                        <p>Guests on Peerspace add their picture, so you know who you’re talking to. Hosts and guests review each other after every booking, so people are held accountable.</p>
                                    </div>
                                </div>
                                <div className='row-how-works'>
                                    <div className='got-your-back-subtitle'>
                                        <i className="far fa-check-circle fa-1x"></i><h3>Support on every booking</h3>
                                    </div>
                                    <div className='how-it-works-p'>
                                        <p>In the rare case something goes wrong, our support team is here to help. We’re open every day of the year.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row-got-your-back-img'>
                            <div>
                                <img src={window.gotyourback} alt="" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className='consulation-section'>
                    <div className='container-consulation'>
                        <div className='consulation-left'>
                            <div className='consulation-content'>
                                <div>
                                    <div className='consulation-content-center'>
                                        <i className="fas fa-mobile-alt fa-2x"></i>
                                        <h3>Need Consulation?</h3>
                                        <p>Our team is here to help. Tell us about your space, and our team will reach out with a helping hand.</p>
                                    </div>
                                </div>
                                <div className='link-consulation-content'>
                                    <a className='btn btn-consulation' href="#">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className='consulation-right'>
                            <div className='consulation-content'>
                                <div>
                                    <div className='consulation-content-center'>
                                        <i className="fas fa-clipboard-list fa-2x"></i>
                                        <h3>Download App</h3>
                                        <p>The Peerspace iOS app makes it easy to message your guests and accept bookings right from your phone.</p>
                                    </div>
                                </div>
                                <div className='link-consulation-content'>
                                    <a className='btn btn-consulation' href="https://apps.apple.com/us/app/peerspace-book-unique-venues/id823879288?mt=8&ign-mpt=uo%3D4">Download App</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='common-questions'>
                    <div className='container-question'>
                        <div className='row-question-title'>
                            <h2>Common questions</h2>
                        </div>
                        <div className='question-container'>
                            <div>
                                <h3>Who can be a Peerspace host?</h3>
                                <p>All kinds of spaces do well on Peerspace – from homes and galleries, to photo studios and warehouses. People come to Peerspace looking for places to have meetings, events, and even film and photo shoots. It’s free to list on Peerspace and every booking is supported by our team.</p>
                            </div>
                        </div>
                        <div className='question-container'>
                            <div>
                                <h3>How do I get pay?</h3>
                                <p>As soon as you accept a booking, your guest is charged in full through our payment provider Stripe. Hosts are automatically paid via direct deposit at the end of each booking.</p>
                            </div>
                        </div>
                        <div className='question-container'>
                            <div>
                                <h3>Does Peerspace provide insurance?</h3>
                                <p>The Peerspace Host Insurance Policy protects hosts for up to $1,000,000 for general liability claims. Every booking made on Peerspace is covered automatically.</p>
                            </div>
                        </div>
                        <div className='question-container'>
                            <div>
                                <h3>How does Peerspace make money?</h3>
                                <p>We collect a 15% fee from bookings made on Peerspace, so we only make money when you do. It’s free to list your space.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='get-started'>
                    <div className='text-center-started'>
                        <h2>Create your listing today</h2>
                        <button to='/add-space' className='btn btn-get-started'>Get Started</button>
                    </div>
                </div>
                <FooterContainer />
            </div>
        )
    }
}

export default SpaceForm;