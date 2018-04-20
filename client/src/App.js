import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import DocumentTitle from "react-document-title";
import Nav from "./components/Nav"

const App = () => (
  <DocumentTitle title="My React Homepage">
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  </DocumentTitle>
);

export default App;
