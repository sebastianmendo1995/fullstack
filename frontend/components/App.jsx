import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import HomeContainer from './home/home_container';
import FooterContainer from './footer/footer_container'
import SpaceContainer from './space/space_container';
import AddingSpaceContainer from './adding_space/adding_space_container';
import SearchContainer from './search/search_container';


const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>

        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/add-space" component={SpaceContainer} />
        <Route exact path="/finish-adding-space" component={AddingSpaceContainer} />
        
        <Switch>
            <Route exact path="/spaces" component={SearchContainer} />
            <Route path='/' component={FooterContainer} />
        </Switch>
    </div>
    
)

export default App;
