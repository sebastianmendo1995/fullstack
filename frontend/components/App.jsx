import React from 'react';
import {Route} from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import HomeContainer from './home/home_container';
import FooterContainer from './footer/footer_container'
import SpaceContainer from './space/space_container';
import AddingSpaceContainer from './adding_space/adding_space_container';



const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>

        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/add-space" component={SpaceContainer} />
        <Route exact path="/finish-adding-space" component={AddingSpaceContainer} />


        
        <Route path='/' component={FooterContainer} />
    </div>
    
)

export default App;
