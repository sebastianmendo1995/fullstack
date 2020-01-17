import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import HomeContainer from './home/home_container';
import SpaceContainer from './space/space_container';
import AddingSpaceContainer from './adding_space/adding_space_container';
import SearchContainer from './search/search_container';
import ShowSpaceContainer from './show_space/show_space_container';
import ErrorPage from './error_page/error_page.jsx';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>

        <Route exact path="/errors" component={ErrorPage} />  
        
        <Switch>
            <Route exact path="/add-space" component={SpaceContainer} />
            <Route exact path="/finish-adding-space" component={AddingSpaceContainer} />
            <Route exact path="/spaces/:spaceId" component={ShowSpaceContainer} />
            <Route exact path="/spaces" component={SearchContainer} />
            <Route exact path="/" component={HomeContainer} />
            <Redirect to="/errors" />   
        </Switch>

    </div>
    
)

export default App;
