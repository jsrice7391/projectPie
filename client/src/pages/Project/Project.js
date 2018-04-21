import React, {Component} from "react";
import { MuiThemeProvider } from "material-ui/styles";
import API from "../../utils"


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

    componentWillMount(){
        this.getProject()
    }

    getProject(){
        API.getProject().then(res =>{
            this.setState({...props}}
        })
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
