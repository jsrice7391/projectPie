import React, {Component} from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";



class DropDown extends Component {







    render(){
         const { people } = this.props;

        return <SelectField maxHeight={200} style={{ marginRight: "5.5%" }}>
        {people.map((person, i) =>(
            <MenuItem key={i} value={person} primaryText={person}/>
        ))}
          </SelectField>;
    }
}
 

export default DropDown;



