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
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/catalog/:id" exact component={WineDetails} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
