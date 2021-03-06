import React from 'react';
import {SignInContainer, ButtonStyles} from './SignIn.styled';
import FormInput from '../form-input/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
//will need to hold state for now
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    //dynamically target the input fields
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async event => {
    //prevent default behavior
    event.preventDefault();
    const {email, password} = this.state;
    try{
         await auth.signInWithEmailAndPassword(email, password);
         //clear form after submission
         this.setState({
           email: '',
           password: ''
         });
       }catch(error){
      console.log(error)
    }
  };

  render() {
    //make form, required fields
    //use a reuseable component for the form
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            required
          />
          {/* add reuseable customButton component */}
          <ButtonStyles>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonStyles>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
