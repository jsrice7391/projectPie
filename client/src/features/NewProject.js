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
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed"
};

export class NewProject extends Component {
         state = { open: false, client: "", title: "", people: ["Justin", "Rice", "Sam", "Walsky"], pm: "", acd: "", ae: "", sd: "", ed: "", team: [] };

         handleOpen = () => {
           this.setState({ open: true });
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

         handlePMChange = (event, data) => {
           this.setState({ pm: data });
         };

         handleClose = () => {
           this.setState({ open: false });
         };

         handleSubmit(e) {
           const project = this.state;
           e.preventDefault();
           API.createProject({ project })
             .then(result => {
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
               });
             })
             .catch(err => console.log(err));
         }

         handleInputChange(event) {
           this.setState({ [event.target.name]: event.target.value });
         }

         render() {
           const actions = [<FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={this.handleClose} />, <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleSubmit} />];

           const { people } = this.state;

           return <div>
               <FloatingActionButton style={style}>
                 <ContentAdd onClick={this.handleOpen} />
               </FloatingActionButton>
               <Dialog title="Add a new project" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
                 <TextField floatingLabelText="Project Title" name="client" value={this.state.title} onChange={this.handleInputChange} style={{ marginRight: "5.5%" }} />
                 <input name="client" type="text" value={this.state.client} onChange={this.handleInputChange} />
                 <br />
                 <DropDownMenu value={this.state.pm} name="pm" onChange={this.handlePMChange}>
                   {this.state.people.map((person, i) => (
                     <MenuItem value={i} primaryText={person} />
                   ))}
                 </DropDownMenu>
                 <DropDownMenu value={this.state.acd} onChange={this.handleACDChange}>
                   {this.state.people.map((person, i) => (
                     <MenuItem value={i} primaryText={person} />
                   ))}
                 </DropDownMenu>
                 <DropDownMenu value={this.state.ae} onChange={this.handleAEChange}>
                   {this.state.people.map((person, i) => (
                     <MenuItem value={i} primaryText={person} />
                   ))}
                 </DropDownMenu>
                 <DropDownMenu value={this.state.sd} onChange={this.handleChangeSD}>
                   {this.state.people.map((person, i) => (
                     <MenuItem value={i} primaryText={person} />
                   ))}
                 </DropDownMenu>
                 <DropDownMenu value={this.state.ed} onChange={this.handleChangeED}>
                   {this.state.people.map((person, i) => (
                     <MenuItem value={i} primaryText={person} />
                   ))}
                 </DropDownMenu>
                 <DatePicker hintText="Start Date" value={this.state.sd} onChange={this.handleChangeSD} style={{ marginRight: "5.5%" }} />
                 <DatePicker hintText="End Date" value={this.state.ed} onChange={this.handleChangeED} style={{ float: "left" }} />
               </Dialog>
             </div>;
         }
       }
