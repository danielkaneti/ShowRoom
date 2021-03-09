import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import Catalog from './pages/Catalog';
import WineDetails from './pages/WineDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navigation from './components/navigation';
import {GeneralStyle} from './components/GeneralStyle';

import io from "socket.io-client";
const socket = io.connect("http://localhost:2222");

function App() {
  return (
    <>
      <BrowserRouter>
      <GeneralStyle />
      <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/catalog/:id" component={WineDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
