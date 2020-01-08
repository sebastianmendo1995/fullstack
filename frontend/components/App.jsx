import React from 'react';
import {Route} from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import HomeContainer from './home/home_container';
import FooterContainer from './footer/footer_container'

const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>

        <Route exact path="/" component={HomeContainer} />
        <Route path='/' component={FooterContainer} />
    </div>
    
)

export default App;
