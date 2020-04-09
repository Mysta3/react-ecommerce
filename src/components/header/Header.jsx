import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <span className="logo">Logo</span>
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
          </div>
        ) : (
          <Link className="option" to="/signin"></Link>
        )}
      </div>
    </div>
  );
}

export default Header;
