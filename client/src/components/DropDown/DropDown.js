import React, {Component} from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";



const DropDown = (props) => (
     <SelectField
        maxHeight={200}
        style={{ marginRight: "5.5%" }}
        onChange={props.handleChange}
        value ={props.value}
      >
        {props.people.map((person, i) => (
          <MenuItem key={i} value={person} primaryText={person} />
        ))}
      </SelectField>

    
)



 

export default DropDown;



