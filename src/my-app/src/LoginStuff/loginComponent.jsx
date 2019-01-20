import React, { Component } 
from 'react';
import {FormControl, FormGroup, Form, Button, ControlLabel} from "react-bootstrap";
import RestUtil from "./util/RestUtil";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userNameField: "",
            passwordField: "",
            isLoggedIn: false
        }
    }

    getValidationState = () => {
        const length = this.state.userNameField.length;
        if (length > 10) {
            return 'success';
        } else if (length > 5) {
            return 'warning';
        } else if (length > 0) {
            return 'error';
        }
        return null;
    }

    handleChange = (e) => {
        this.setState({ 
            userNameField: e.target.value
        });
      }

    handleSubmit = event => {
        event.preventDefault();
     }

    render() {
        return(
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup
                        controlId="username"
                        validationState={this.getValidationState()}>
                        <ControlLabel>user name</ControlLabel>
                        <br></br>
                        <FormControl
                            type="username"
                            value={this.state.userNameField}
                            placeholder="username"
                            onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                    </FormGroup>
                    <br></br>
                    <FormGroup
                        controlId="password"
                        validationState={this.getValidationState()}>
                        <ControlLabel>password</ControlLabel>
                        <br></br>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            placeholder="Enter your moms password"
                            onChange={this.handleChange}
                        />
                    <FormControl.Feedback />
                    </FormGroup>
                </Form>
                <Button bsStyle="primary"
                type="submit">
                    Log me in daddy
                </Button>
            </div>
        )
    }
}
  
  export default LoginComponent;
  