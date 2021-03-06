import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import Catalog from './pages/Catalog';
import WineDetails from './pages/WineDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navigation from './components/navigation';
import {GeneralStyle} from './components/GeneralStyle';
import chat from './components/chat';
import { connectSocket } from './socket';

try {
  connectSocket(); 
} catch (error) {
  console.log('Could not connect to socket', error);
}

function App() {
  return (
    <>
      <BrowserRouter>
      <GeneralStyle />
      <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chat" exact component={chat} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/catalog/:id" exact component={WineDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
