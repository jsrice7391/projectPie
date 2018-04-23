import React, {Component} from "react";
import { MuiThemeProvider } from "material-ui/styles";
import API from "../../utils/API";



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

    getProject() {
      API.getProject(this.props.match.params.title)
        .then(res => {
          this.setState({ project: res.data[0] });
        })
        .catch(err => console.log(err));
    }



    componentWillMount(){
        this.getProject()
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
