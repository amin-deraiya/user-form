import React, { Component } from 'react'
import TakeMoney from './strip'
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Merchant_Name: null,
      Contact_Name: null,
      Contact_Phone: null,
      Mobile_Number: null,
      Address: null,
      Merchant_Email: null,
      Merchant_Website: null,
      Role: this.props.role,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.valideteData()) {
      console.log(this.state);
    }
  }


  valideteData() {
    const merchantName = this.state.Merchant_Name;
    const contactName = this.state.Contact_Name;
    const contactPhone = this.state.Contact_Phone;
    const mobileNumber = this.state.Mobile_Number;
    const address = this.state.Address;
    const merchantEmail = this.state.Merchant_Email;
    const merchantWebsite = this.state.Merchant_Website;
    var letters = /^[A-Za-z]+$/;
    var phoneno = /^\d{10}$/;

    if (!(merchantName).match(letters) || !(contactName).match(letters)) {
      alert('Merchant name and Contact name must be in letters');
      return false;
    }
    else if (!(mobileNumber).match(phoneno)) {
      alert('Please provide valid mobile number');
      return false;
    }
    else if (isNaN(contactPhone)) {
      alert('Please provid valid Contact Phone Number');
      return false;
    }
    return true
  }

  render() {
    // console.log(this.state);
    return (
      <div className="container my-5">
        <div className="card-body">
          <h1 className="text-center">Profile</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="Merchant_name">*Merchant Name: </label>
              <input type="text" required className="form-control" name="Merchant_Name" placeholder="Enter Name"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label for="Contact_Name:">*Contact Name: </label>
              <input type="text" required className="form-control" name="Contact_Name" placeholder="Enter Contact Name" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label for="Contact_Phone:">*Contact Phone: </label>
              <input type="tel" required className="form-control" name="Contact_Phone" placeholder="Enter Contact Phone" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label for="Mobile_Number:">*Contact Mobile Number: </label>
              <input type="text" required className="form-control" name="Mobile_Number" placeholder="Enter Mobile Number" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label for="Address:">*Address: </label>
              <input type="text" required className="form-control" name="Address" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label for="Merchant_Email:">*Merchant Email: </label>
              <input type="email" class="form-control" required name="Merchant_Email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label for="Merchant_Website:">*Merchant website: </label>
              <input type="text" required className="form-control" name="Merchant_Website" placeholder="Enter Website" onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">SAVE</button>
          </form>
          <div className="text-right"> <TakeMoney /> </div> {console.log(<TakeMoney />)}
        </div>
      </div >
    )
  }
}

export default UserForm
