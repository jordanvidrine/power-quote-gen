import React, {Component} from 'react';
import CustomerInfoForm from './CustomerInfoForm'
import CustomerInfoReceived from './CustomerInfoReceived'
import './App.css';

var validator = require("email-validator");

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      customerInfo: {
        projectTitle: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        state: 'LA',
        zip: '',
        quoteType: '',
        needsToBeCorrected: []
      },
    }

  this.handleChange = this.handleChange.bind(this)
  this.formValidator = this.formValidator.bind(this)
  }

  handleChange(e) {
    let info = e.target.name;
    this.setState({
      ...this.state,
      customerInfo : {
        ...this.state.customerInfo,
        [info]: e.target.value,
      }
    })
  }

  formValidator(){

    let needsToBeCorrected = [];

    for (let info in this.state.customerInfo) {
      if (info === 'isValid') {
      } else {
        if (this.state.customerInfo[info] === '')
          needsToBeCorrected.push(info)
        }
      }

    if (needsToBeCorrected.length === 0) {
      this.setState({
        ...this.state,
        customerInfo: {
          ...this.state.customerInfo,
          needsToBeCorrected,
          isValid: true,
        }})

      } else if (needsToBeCorrected.length !== 0) {
        this.setState({
          ...this.state,
          customerInfo: {
            ...this.state.customerInfo,
            needsToBeCorrected,
            isValid: false,
          }})
      }
  }

  render() {

  var warningError;
  if (this.state.customerInfo.isValid === false) {
    warningError = this.state.customerInfo.needsToBeCorrected.reduce((acc,cur,idx,array) => {
    if (idx < array.length-1) {
        acc = acc + '' + ' ' + cur + ',';return acc
    } else {
      return acc + ' ' + cur + '.' + ' Once corrected, try submitting again.';
    }},'The following items need to be corrected:');
  } else {
    warningError = '';
  }

  return (
    <div className="App">
    <h1>Quote Generation App</h1>
    {this.state.customerInfo.isValid ?
      <CustomerInfoReceived customerInfo={this.state.customerInfo} /> :
      <CustomerInfoForm
        handleChange={this.handleChange}
        customerInfo={this.state.customerInfo}
        formValidator={this.formValidator}
      />
    }
    <p className='warning'>
      {warningError}
    </p>
    </div>
  );
  }
}

export default App;
