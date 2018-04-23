import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import ContentAdd from "material-ui/svg-icons/content/add";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import DropDown from "../components/DropDown";
import API from "../utils/API";


const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed"
};

export class NewProject extends Component {
         state = { open: false, client: "", title: "", people: ["Justin", "Rice", "Sam", "Walsky"], pm: "", acd: "", ae: "", sd: "", ed: "", team:[] };

         handleOpen = () => {
           this.setState({ open: true });
         };

         handleChange = (event, index, value) => {
           this.setState({ pm: value });
         };
         handleACDChange = (event, index, value) => {
           this.setState({ acd: value });
         };
         handleAEChange = (event, index, value) => {
           this.setState({
             people: this.state.people.filter(function(person) {
               return person !== value;
             }),
             ae: value
           });
         };

         handleTextChange = e => {
           this.setState({ client: e.target.value });
         };

         handleChangeSD = (event, date) => {
           this.setState({ sd: date });
         };

         handleChangeED = (event, date) => {
           this.setState({ ed: date });
         };

         handlePMChange = (event, date) =>{
           this.setState({pm: date})
         }

         handleClose = () => {
           this.setState({ open: false });
         };

         handleSubmit(e) {
           const project = this.state;
           e.preventDefault();
           API.createProject({project}).then(result => {
             this.setState({
               open: false,
               client: "",
               title: "",
               people: ["Justin", "Rice", "Sam", "Walsky"],
               pm: "",
               acd: "",
               ae: "",
               sd: "",
               ed: "",
               team: []
             })
           }).catch(err => console.log(err))

         }

         render() {
           const actions = [<FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleClose} />, <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleSubmit} />];

           const { people } = this.state;

           return <div>
               <FloatingActionButton style={style}>
                 <ContentAdd onClick={this.handleOpen} />
               </FloatingActionButton>
               <Dialog title="Add a new project" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
                 <TextField floatingLabelText="Project Title" value={this.state.title} onChange={this.handleTextChange} style={{ marginRight: "5.5%" }} />
                 <TextField floatingLabelText="Client Name" value={this.state.client} onChange={this.handleTextChange} style={{ marginRight: "5.5%" }} />
                 <br />
                 <DropDown people={this.state.people} value={this.state.pm} onChange={this.handlePMChange}/>
                 <DatePicker hintText="Start Date" value={this.state.sd} onChange={this.handleChangeSD} style={{ marginRight: "5.5%" }} />
                 <DatePicker hintText="End Date" value={this.state.ed} onChange={this.handleChangeED} style={{float:"left"}} />
               </Dialog>
             </div>;
         }
       }
