import React, { Component } from "react";
import "semantic-ui-css";
import Search from "./pages/Search"
import Save from "./pages/Save"
import { BrowserRouter as Router,Route} from "react-router-dom"
class App extends Component {
  render() {
    return (
     <>
        <Router>
          <Route exact path="/" component={Search}/>
          <Route exact path="/save" component={Save}/>
        </Router>
      </>
    );
  }
}

export default App;
