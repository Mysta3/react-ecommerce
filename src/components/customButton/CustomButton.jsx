import React from 'react';
import './custom-button.scss';
//pass in children props to dynamically render name of button
//spread props through to customButton
function CustomButton({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
