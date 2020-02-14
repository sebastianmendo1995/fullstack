import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <footer className='home-footer'>
                <div className='container-fluid-footer'>
                    <div className='footer-left'>
                        <div className='footer-left-container'>
                            <img src={window.footerlogo} className='footer-logo' />
                            <p>© Peerspace - Terms - Privacy</p>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <div className='footer-content'>
                            <div className='column social'>
                                <h4>Social</h4>
                                <ul>
                                    <li><a href="https://www.facebook.com/peerspace/" target="_blank">Facebook</a></li>
                                    <li><a href='https://www.instagram.com/peerspace/' target="_blank">Instagram</a></li>
                                    <li><a href='https://twitter.com/Peerspace' target="_blank">Twitter</a></li>
                                    <li><a href='https://www.aedin.com/company/peerspace/' target="_blank">LinkedIn</a></li>
                                    <li><a href='https://www.pinterest.com/peerspace/' target="_blank">Pinterest</a></li>
                                </ul>
                            </div>
                            <div className='column explore'>
                                <h4>Explore</h4>
                                <ul>
                                    <li><Link to='/activities'>Activities</Link></li>
                                    <li><Link to='/locations'>Locations</Link></li>
                                    <li><Link to=''>Resources</Link></li>
                                </ul>
                            </div>
                            <div className='column host'>
                                <h4>Host</h4>
                                <ul>
                                    <li><Link to='/add-space'>List Your Space</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;