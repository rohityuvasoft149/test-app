import React, { Component } from 'react';
import  './header.css'
import {Link} from 'react-router-dom'
class Header extends Component {
  render() {
    return (
     <div className="fixed-top">
  <header className="topbar">
      <div className="container">
        <div className="row">

          <div className="col-sm-12">
            <ul className="social-network">
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-pinterest"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
          </div>

        </div>
      </div>
  </header>
  <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
    <div className="container">
      <a className="navbar-brand" href="index.html"> LACODEID.COM</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">

        <ul className="navbar-nav ml-auto">

          <li className="nav-item active">
            <Link className={'nav-link'} to={'/'}>Home</Link>
          </li>

          <li className="nav-item">
            <Link className={'nav-link'} to={'/dashboard'}>Dashboard</Link>
          </li>

        
        </ul>
      </div>
    </div>
  </nav>
</div>
    );
  }
}

export default Header;
