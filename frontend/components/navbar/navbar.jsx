import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropdown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown(){
        $(function () {
            $('.header-dropdown').toggleClass('show');
        });
    }

    render(){

        const ulElement = this.props.currentUser ? (
            <ul className="nav">
                <li className="session u">
                    <Link to='/inbox'>Inbox</Link>
                </li>
                <li className="session u">
                    <Link to='/bookings'>Bookings</Link>
                </li>
                <li className="session u">
                    <Link to='/listings'>Listings</Link>
                </li>
                <li className="session u">
                    <Link to='/calendar'>Calendar</Link>
                </li>
                <li className="session u">
                    <Link to='/add-ons'>Add-ons</Link>
                </li>
                <li className="dropdown-toggle u" onClick={this.toggleDropdown}>
                    <a>
                        <img src={window.user} /> 
                        <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className='header-dropdown user' >
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/boards'>Boards</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/details'>Details</Link></li>
                        <li><Link to='/payments'>Payments</Link></li>
                        <li className="link-your-space"><Link to='/add-space'>List Your Space</Link></li>
                        <li onClick={this.props.logout}><Link to=''>Log Out</Link></li>
                    </ul>
                </li>
            </ul>
        ) : (
            <ul className="nav">
                <li className="dropdown-toggle" onClick={this.toggleDropdown}>
                    <a>Activities <i className="fas fa-chevron-down"></i></a>
                    <ul className='header-dropdown' >
                        <li><Link to='/meetings'>Meetings</Link></li>
                        <li><Link to='/film-shoot'>Film Shoots</Link></li>
                        <li><Link to='/birthday-party'>Birthday Party</Link></li>
                        <li><Link to='/photo-shot'>Photo Shoots</Link></li>
                        <li><Link to='/workshop'>Workshop</Link></li>
                        <li><Link to='/baby-shower'>Baby Shower</Link></li>
                        <li><Link to='/dinner'>Dinners</Link></li>
                        <li><Link to='/wedding-reception'>Weddings</Link></li>
                        <li><Link to='/training'>Trainings</Link></li>
                        <li><Link to='/launch-event'>Launch Parties</Link></li>
                        <li><Link to='/networking'>Networking Events</Link></li>
                        <li><Link to='/performance'>Performances</Link></li>
                    </ul>
                </li>
                <li className="link-your-space">
                    <Link to='/add-space'>List Your Space</Link>
                </li>
                <li className="session">
                    <a onClick={() => this.props.openModal('signup')}>Sign Up</a>
                </li>
                <li className="session">
                    <a onClick={() => this.props.openModal('login')}>Log In</a> 
                </li>
            </ul>
        )

        return (
            <div className="nav-bar-container sticky">
                <div className="logo">
                    <Link to='/'><img className="brand-logo" src={window.logo} /></Link>
                    <ul>
                        <li>
                            <span><i className="fas fa-search"></i>Search</span>
                        </li>
                    </ul>
                </div>
                {ulElement}
            </div>
        )
    }
}

export default Navbar;