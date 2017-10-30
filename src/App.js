import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Wantpizza from './Wantpizza'

class App extends Component {
  render() {
    return (
      <div>
      <Wantpizza pizzas= {["sausage","cheese","pepperoni","hawaiian","vegetable","3 cheese","macaroni","chicken","sausage and pepperoni"]} />
      </div>
    );
  }
}

export default App;
