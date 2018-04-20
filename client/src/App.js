import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import DocumentTitle from "react-document-title";
import Nav from "./components/Nav"
import Project from "./pages/Project"
import { MuiThemeProvider } from "material-ui/styles";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

const App = () => (
  <div>
    <DocumentTitle title="My React Homepage" />
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <MuiThemeProvider>
      <FloatingActionButton className="fab">
        <ContentAdd />
      </FloatingActionButton>
    </MuiThemeProvider>
  </div>
);

export default App;
