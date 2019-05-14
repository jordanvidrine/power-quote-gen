import React, {Component} from 'react';

class CustomerInfoReceived extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let {projectTitle, firstName, lastName, phone, email, address, state, zip, quoteType } = this.props.customerInfo;
    return(
      <div>
      <p>Project Title : {projectTitle}</p>
      <p>Name: {firstName}, {lastName}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Address: {address}, {state} {zip}</p>
      <p>Quote Type: {quoteType}</p>
      </div>
    )
  }
}

  export default CustomerInfoReceived;


  // projectTitle: '',
  // firstName: '',
  // lastName: '',
  // phone: '',
  // email: '',
  // address: '',
  // state: 'LA',
  // zip: '',
  // quoteType: '',
