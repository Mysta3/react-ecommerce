import React from 'react';
import { ReactComponent as Logo } from '../../assets/ROYL_clothing_logo.svg';

import { Link } from 'react-router-dom';
//REDUX IMPORTS
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import './header.scss';

const Header = ({ currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>)
           : 
        (<Link className="option" to="/signin">
          SIGN IN
        </Link>
           )} 
    </div>
  </div>
);

//state is the rootreducer
//name can technically be anything but redux standard is mapStateToProps
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

//CONNECT - a HOF takes 2 args. 1 is the mapStateToProps
export default connect(mapStateToProps)(Header);
