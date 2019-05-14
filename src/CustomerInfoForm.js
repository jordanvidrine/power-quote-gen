import React, {Component} from 'react';

class CustomerInfoForm extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div id='CustomerForm'>
      <h3>Customer Information</h3>
      <div id="projectTitle">
        <label>Project Title</label>
        <input
          onChange={this.props.handleChange}
          type='text'
          name="projectTitle"
          value={this.props.customerInfo.projectTitle}
        ></input>
      </div>

        <div id="customerInfo">
          <div id="customerName">
            <label>First Name</label>
            <input
              onChange={this.props.handleChange}
              type='text'
              name="firstName"
              value={this.props.customerInfo.firstName}
            ></input>
            <label>Last Name</label>
            <input
              onChange={this.props.handleChange}
              type='text'
              name="lastName"
              value={this.props.customerInfo.lastName}
            ></input>
          </div>
          <div id="customerContact">
            <label>Phone Number</label>
            <input
              onChange={this.props.handleChange}
              type='text'
              name="phone"
              value={this.props.customerInfo.phone}
            ></input>
            <label>Email Address</label>
            <input
              onChange={this.props.handleChange}
              type='text'
              name="email"
              value={this.props.customerInfo.email}
            ></input>
          </div>
        </div>

        <div id="customerLocation">
          <label>Address</label>
          <input
            onChange={this.props.handleChange}
            type='text'
            name="address"
            value={this.props.customerInfo.address}
          ></input>
          <label>State</label>
            <select
              onChange={this.props.handleChange}
              name="state">
              <option value="AL">Alabama</option>
              <option value="AR">Arkansas</option>
              <option selected="selected" value="LA">Louisiana</option>
              <option value="MS">Mississippi</option>
              <option value="TX">Texas</option>
            </select>
          <label>Zip</label>
          <input
            onChange={this.props.handleChange}
            type='text'
            name="zip"
            value={this.props.customerInfo.zip}
          ></input>
        </div>

        <div id="typeOfWork">
          <input onChange={this.props.handleChange}
            type="radio"
            name="quoteType"
            value="genInstall"
          />
          <label>Gen Install</label>
          <input
            onChange={this.props.handleChange}
            type="radio"
            name="quoteType"
            value="genMaint"
          />
          <label>Gen Maint</label>
          <input
            onChange={this.props.handleChange}
            type="radio"
            name="quoteType"
            value="electrical"
          />
            <label>Elec Const</label>
        </div>
        <button id="next" onClick={this.props.formValidator}>Next</button>

      </div>
    )
  }
}

export default CustomerInfoForm;
