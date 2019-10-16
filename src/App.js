import React, { Component } from 'react';
import AppplicationViews from './component/auth/ApplicationView'
import NavBar from './component/nav/NavBar'
import Login from './component/auth/Login'
import './App.css';

class App extends Component {
  // construstor- first thing that happens
  state = {
    user: sessionStorage.getItem("credentials") !== null,
    userId: sessionStorage.getItem("credentials") ? JSON.parse(sessionStorage.getItem("credentials"))[0].id : false
  }

  // Check if credentials are in local storage --returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  setUser = (authObj) => {

    //  For now, just store the email and password that the customer enters into local storage.
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated(),
      userId: authObj.id
    });
  }
  clearUser = () => {
    sessionStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }
  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    return (
      <>
        {this.state.user ? (
          <>
            <NavBar />
            <AppplicationViews userId={this.state.userId} />
          </>
        ) : (
            <Login  setUser={this.setUser}/>
          )}
      </>
    )
  }
}

export default App;
