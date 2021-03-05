import './App.css';
import Navigation from './components/navigation'
import Footer from './components/footer'
import Men from './pages/men'
import Women from './pages/women'
import Home from './pages/home'
import Register from './pages/register/Register'
import Login from './pages/Login/Login'



import { BrowserRouter, Route, Switch } from "react-router-dom";



import io from "socket.io-client";
const socket = io.connect("http://localhost:2222");

function App() {
  return (
    <>
      <Navigation/>
     
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Men" component={Men} />
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
     
        <Route path="/Women" component={Women} />
       

      </Switch>
      </BrowserRouter>

      <Footer/>

    </>

  );
}

export default App;
