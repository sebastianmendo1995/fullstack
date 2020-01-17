import React from 'react';
import { Link } from 'react-router-dom';
import ActivityIndexItem from '../activity/activity_index_item';
import Footer from '../footer/footer';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.fetchActivities();
    }

    update(field){
        
    }

    render(){
        return(
            <div>
                <div className='home'>
                    <section className='search-event'>
                        <div className='left-side'>
                            <div className='search-container'>
                                <h1>Get together </h1>
                                <h1>somewhere better</h1>
                                <p>Book thousands of unique spaces directly from local hosts</p>
                                <form className='form-home-search'>    
                                        <input
                                            className='form-home-control what'
                                            type="text"
                                            placeholder='What are you planning?'
                                        />
                                        <br/>
                                    <div className='search-input-container'>
                                        <input 
                                            className='form-home-control where'
                                            type="text"
                                            placeholder='Where?'
                                        />
                                        <input 
                                            className='form-home-control when'
                                            type="date"
                                            // value={this.state.date}
                                            // onChange= {update('date')}
                                        />
                                    </div>
                                    <br/>
                                    <button className='btn btn-home-search' type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className='right-side'>
                            <img src={window.home}/>
                        </div>
                    </section>
                    <section className='popular-activities'>
                        <br />
                        <div className='row'>
                            <div className='text-center-title'>
                                <h2>Popular Activities</h2>
                            </div>
                        </div>

                        <div className='activities-collection'>
                            {
                                this.props.activities.slice(0,12).map( (activity) => {
                                    return (
                                        <Link to='/spaces'>
                                            <ActivityIndexItem key={activity.id} activity={activity} />
                                        </Link>
                                    )
                                })

                            }
                        </div>
                    </section>
                    <section className='how-it-works-section'>
                        <div className='text-center-title'>
                            <h2>How it works</h2>
                        </div>
                        <p className="text-center-how-it-works">
                            Find thousands of hosts with one-of-a-kind spaces where you can meet, create, or celebrate
                        </p>
                        <div className='how-it-works-collection'>
                            <div className='how-it-works-elements'>
                                <i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Browse homes, lofts,<br/>galleries, and more</p>
                            </div>
                            <div className='how-it-works-elements'>
                                <i className="far fa-comment-alt fa-2x"></i>
                                <p>Compare prices and <br/>connect with hosts</p>
                            </div>
                            <div className='how-it-works-elements'>
                                <i className="far fa-check-circle fa-2x"></i>
                                <p>Book in just a few clicks</p>
                            </div>
                        </div>
                    </section>
                    <section className='special-events-section'>
                        <div className='left-side'>
                            <img src={window.specialevents} />
                        </div>
                        <div className='right-side'>
                            <div className='special-search-container'>
                                <h1>Peerspace Select </h1>
                                <p>A more personalized booking experience<br/>
                                for corporate event professionals, executive<br/>
                                assistants, creative producers, and business<br/>
                                leaders.</p>
                                <button className='btn btn-special-search' type="submit">Get Started</button>
                            </div>
                        </div>
                    </section>
                    <section className='banner-section'>
                        <div className='container-fluid'>
                            <h3>Share your space and start earning</h3>
                            <Link to='/add-space'>
                                <button className="btn btn-link-your-space">List Your Space</button>
                            </Link>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;