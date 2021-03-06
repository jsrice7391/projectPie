import React from "react";
import { MuiThemeProvider } from "material-ui";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import { Link } from "react-router-dom";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuItem from "material-ui/MenuItem";
import {blue500} from "material-ui/styles/colors";

const styleLink={
  color: "white"
}

const toolbarStyle = {
  backgroundColor: blue500
};

const Nav = (props) => (
  <MuiThemeProvider>
    <Toolbar style={toolbarStyle}>
      <ToolbarGroup>
        <Link to="/" style={styleLink}>
          ProjectPi
        </Link>
      </ToolbarGroup>
      <IconMenu
        iconButtonElement={
          <IconButton touch={true}>
            <NavigationExpandMoreIcon />
          </IconButton>
        }
      >
        <MenuItem primaryText="Download" />
        <MenuItem primaryText="More Info" />
      </IconMenu>
    </Toolbar>
  </MuiThemeProvider>
);

export default Nav;
