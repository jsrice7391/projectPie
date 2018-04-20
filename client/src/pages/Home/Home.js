import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { MuiThemeProvider } from "material-ui/styles";
import "./home.css"


class All extends Component {
  render() {
    return(
    <MuiThemeProvider>
      <h1>Welcome to my App!</h1>
      <FloatingActionButton className="fab">
        <ContentAdd />
      </FloatingActionButton>
    </MuiThemeProvider>
    )
  }
}

export default All;
