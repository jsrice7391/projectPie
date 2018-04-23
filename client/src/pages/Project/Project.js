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
      API.getProject(this.props.match.params.projectTitle)
        .then(res => {
          console.log(res.data[0])
          this.setState({
            startDate: res.data[0].startDate,
            name: res.data[0].name,
            client: res.data[0].client
           });
        })
        .catch(err => console.log(err));
    }



    componentWillMount(){
        this.getProject()
    }

  render() {
    const {client} = this.state
    return(
    <MuiThemeProvider>
      <h1>Project Page!</h1>
      <h2>{this.state.client}</h2>
    </MuiThemeProvider>
    )
  }
}

export default Project;
