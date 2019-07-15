import React, { Component } from "react";
import "semantic-ui-css";
import Search from "./pages/Search"
import Save from "./pages/Save"
import {BrowserRouter, Route, Router} from "react-router-dom"
class App extends Component {
  render() {
    return (
     <>
        <Router>
          <Route exact path="/" Component={Search}/>
          <Route exact path="/save" Component={Save}/>
        </Router>
      </>
    );
  }
}

export default App;
