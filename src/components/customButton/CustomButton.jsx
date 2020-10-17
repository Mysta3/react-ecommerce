import React from 'react';


import { CustomButtonContainer } from './CustomButton.styles';
//pass in children props to dynamically render name of button
//spread props through to customButton
function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomButton;
