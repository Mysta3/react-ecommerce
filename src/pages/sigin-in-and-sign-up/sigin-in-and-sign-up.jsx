import React from 'react';
import './sigin-in-and-sign-up.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/signup/SignUp';
//functional component, will not need to hold state
function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
        {/* include signin component */}
      <SignIn />
      <SignUp/>
    </div>
  );
}

export default SignInAndSignUp;
