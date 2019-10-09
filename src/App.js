import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Header from './component/Header'
import Footer from './component/Footer'
class App extends Component{
  render(){
    return(
      <div className="App">
        <Header></Header> 
        <h1> Hello, World!!</h1>
        <Footer></Footer>  
      </div>
    );
  }
}

export default hot(module)(App);