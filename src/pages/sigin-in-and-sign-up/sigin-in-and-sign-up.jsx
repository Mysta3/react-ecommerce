import React from 'react';
import './sigin-in-and-sign-up.scss';
import SignIn from '../../components/sign-in/SignIn';
//functional component, will not need to hold state
function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
        {/* include signin component */}
      <SignIn />
    </div>
  );
}

export default SignInAndSignUp;
