import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sigin-in-and-sign-up/sigin-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //takes in current user as an param.
    //onAuthStateChanged comes from auth firebase
    //open subscription between our app and firebase
    //like a messaging system between app and firebase
    //listens to auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //check to see any updates to information has changed in the snapshot
        userRef.onSnapshot(snapShot => {
          this.setState({
            //create a new object with data from the snapshot object returned
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.setState);
        });       
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    //call unsubscribeFromAuth to close subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
