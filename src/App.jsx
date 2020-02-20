import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/Content'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header></Header> 
        <Content></Content>  
        <Footer></Footer>  
      </div>
    );
  }
}

export default hot(module)(App);