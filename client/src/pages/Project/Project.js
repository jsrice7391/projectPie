import React, {Component} from "react";
import { MuiThemeProvider } from "material-ui/styles";


class Project extends Component {
    state = {
        startDate:"",
        endDate: "",
        name: "",
        acd: "",
        ae: "",
        client: "",
        pm: "",
        team: [],
        note: ""
    }
    
  render() {
    return(
    <MuiThemeProvider>
      <h1>Project Page!</h1>
    </MuiThemeProvider>
    )
  }
}

export default Project;
