import './App.css';
import Navigation from './components/navigation'
import Header from './components/header'
import Footer from './components/footer'


import { BrowserRouter, Route, Switch } from "react-router-dom";



import io from "socket.io-client";
const socket = io.connect("http://localhost:2222");

function App() {
  return (
    <>

    
    <Navigation/>
    <Header/>
    <Footer/>
    </>


  );
}

export default App;
