import React, { Component } from 'react';
import Cart from './components/cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shop</h1>
        <Cart />
      </div>
    );
  }
}

export default App;
