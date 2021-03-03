import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import UserProfile from './components/profiles/UserProfile';
import ItemsPage from './components/pages/ItemsPage';
import AdminProfile from './components/profiles/adminProfile/AdminProfile';
import SearchPage from './components/pages/SearchResult/SearchPage';
const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/adminprofile" component={AdminProfile} />
            {/* <Route path="/logout" component={Logout}/> */}
            {/* <Route path="/notification" component={Notification}/> */}
            <Route path="/itempage" component={ItemsPage} />
            <Route path="/SearchPage" component={SearchPage} />
        </Switch>
    );
};

export default Router;
