import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sigin-in-and-sign-up/sigin-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //takes in current user as an param.
    //onAuthStateChanged comes from auth firebase
    //open subscription between our app and firebase
    //like a messaging system between app and firebase
    //listens to auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //check to see any updates to information has changed in the snapshot
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            //create a new object with data from the snapshot object returned
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser({ userAuth });
    });
  }

  componentWillUnmount() {
    //call unsubscribeFromAuth to close subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

//dispatch - takes the action and passes it to every reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
