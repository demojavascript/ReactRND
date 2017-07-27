import React, {Component} from 'react';
import { DropdownButton,MenuItem,Alert, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
bootstrapUtils.addStyle(Button, 'custom');
export default class Test extends Component {
  render(){
    return(
      <div>
        <style type="text/css">{`
        .btn-custom {
            background-color: purple;
            color: white;
        }
        .jhgdf{
          color:red;
        }
        `}</style>
        <Button className="jhgdf" bsStyle="custom">Custom</Button>
        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
        </Alert>
        <form>
          <FormGroup
          controlId="formBasicText">
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter text"
            />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
        </form>
      </div>
    )
  }
}
