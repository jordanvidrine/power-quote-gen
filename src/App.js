import React, {Component} from 'react';
import CustomerInfo from './CustomerInfo'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {


  return (
    <div className="App">
    <h1>Quote Generation App</h1>
    <CustomerInfo />
    </div>
  );
  }
}

export default App;
