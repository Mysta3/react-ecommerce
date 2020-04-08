import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';

function MenuItem(props) {
  const { title, imageUrl, size, history } = props;
  return (
    <div className={`${size} menu-item`} onClick={() => history.push('')}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
