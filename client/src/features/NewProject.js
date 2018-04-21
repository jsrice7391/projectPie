import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import ContentAdd from "material-ui/svg-icons/content/add";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import SelectField from "material-ui/SelectField";
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
  state = {
    open: false,
    client: "",
    people: ["Justin", "Rice", "Sam", "Walsky"],
    pm: "",
    acd: "",
    ae: "",
    sd: "",
    ed: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleChange = (event, index, value) =>
    this.setState({
      value
    });

  handleTextChange = e => {
    this.setState({
      client: e.target.value
    });
  };

  handleChangeSD = (event, date) => {
    this.setState({ sd: date });
  };

  handleChangeED = (event, date) => {
    this.setState({ ed: date });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit(props) {
    console.log(`${this.state.props}`);
  }
  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <div>
        <FloatingActionButton style={style}>
          <ContentAdd onClick={this.handleOpen} />
        </FloatingActionButton>
        <Dialog
          title="Add a new project"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            floatingLabelText="Floating Label Text"
            value={this.state.client}
            onChange={this.handleTextChange}
          />
          <br />
          <SelectField
            value={this.state.pm}
            onChange={this.handleChange}
            floatingLabelText="Project Manager"
          >
            {this.state.people.map((person, i) => {
              return (
                <MenuItem value={person} key={i} primaryText={`${person}`} />
              );
            })}
          </SelectField>
          <br />
          <SelectField
            value={this.state.acd}
            onChange={this.handleChange}
            floatingLabelText="Asssitant Creative Driector"
          >
            {this.state.people.map((person, i) => {
              return (
                <MenuItem value={person} key={i} primaryText={`${person}`} />
              );
            })}
          </SelectField>
          <br />
          <SelectField
            value={this.state.ae}
            onChange={this.handleSelectChange}
            floatingLabelText="Account Executive"
          >
            {this.state.people.map((person, i) => {
              return (
                <MenuItem value={person} key={i} primaryText={`${person}`} />
              );
            })}
          </SelectField>
          <br />
          <DatePicker
            hintText="Start Date"
            value={this.state.sd}
            onChange={this.handleChangeSD}
          />

          <DatePicker
            hintText="End Date"
            value={this.state.ed}
            onChange={this.handleChangeED}
          />
        </Dialog>
      </div>
    );
  }
}
