import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import DocumentTitle from "react-document-title";
import Nav from "./components/Nav"
import Project from "./pages/Project"
import {NewProject} from "./features/NewProject";
import { MuiThemeProvider } from "material-ui/styles";


const App = () => (
  <div>
    <DocumentTitle title="My React Homepage" />
    <MuiThemeProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project/:projectTitle" component={Project} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      <NewProject/>
    </MuiThemeProvider>
  </div>
);

export default App;
