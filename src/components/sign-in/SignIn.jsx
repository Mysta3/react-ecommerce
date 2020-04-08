import React from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
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
  handleSubmit = event => {
      //prevent default behavior
    event.preventDefault();

    //clear form after submission
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
      //make form, required fields
      //use a reuseable component for the form
    return (
      <div className="sign-in">
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
          <input type="submit" value="Submt Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
