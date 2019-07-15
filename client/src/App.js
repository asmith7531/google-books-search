import React, {
  Component
} from "react";
import "semantic-ui-css";
import {
  BrowserRouter,
  Route,
  Router
} from "react-router-dom"
class App extends Component {
  render() {
    return ( <
      >
      <
      Router >
      <
      Route exact path = "/"
      Component = {
        Search
      }
      /> <
      Route exact path = "/saved"
      Component = {
        Saved
      }
      /> <
      /Router> <
      />
    );
  }
}

export default App;