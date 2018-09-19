import React, { Component } from 'react';
import * as API  from './helper'
class SignIn extends Component {
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.manageRefs = this.manageRefs.bind(this);
	  this.state ={
	  	user: {}
	  }
	}
  
  handleSubmit(){
  	this.manageRefs()
  	debugger
  	
  };

  manageRefs(){
  	var user = {}
  	user["firstname"] = this.refs.firstname.value
  	user["email"] = this.refs.email.value
  	user["password"] = this.refs.password.value
  	this.state.user= user
  }

  render() {
    return (
      
			<div className="span3">
			  <h2>Sign Up</h2>
			    <form>
				    <label>First Name</label>
				    <input ref="firstname" type="text" name="firstname" className="span3" />
				    <label>Email Address</label>
				    <input ref="email" type="email" name="email" className="span3" />
				    <label>Password</label>
				    <input ref="password" type="password" name="password" className="span3" />
				    <button value="Sign up" onClick={this.handleSubmit} className="btn btn-primary pull-right">signup</button>
				    <div className="clearfix"></div>
			    </form>
			</div>
    );
  }
}

export default SignIn;