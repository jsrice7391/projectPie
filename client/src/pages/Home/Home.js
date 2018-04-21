import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import {ProjForm, NewProject} from "../../features/NewProject";
import "./home.css"


class All extends Component {
  render() {
    return(
    <MuiThemeProvider>
      <h1>Welcome to my App!</h1>
    </MuiThemeProvider>
    )
  }
}

export default All;
