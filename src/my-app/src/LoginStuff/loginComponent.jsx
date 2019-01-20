import React, { Component } 
from 'react';
import {FormControl, FormGroup, Form, Button, ControlLabel} from "react-bootstrap";
import RestUtil from "../util/RestUtil";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userNameField: "",
            passwordField: "",
            isLoggedIn: false
        }
    }

    sendLoginRequest = () => {
        // console.log(this.state.userNameField)
        let endpoint = "api-token-auth"
        let payload = {
            username: this.state.userNameField,
            password: this.state.passwordField
        }
        RestUtil.sendPostRequest(endpoint, payload);
    }

    sendLogoutRequest = () => {
        let endpoint = "logout"
        RestUtil.sendPostRequest(endpoint)
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

    handleChangeUser = (e) => {
        this.setState({ 
            userNameField: e.target.value
        });
      }

      handleChangePass = (e) => {
        this.setState({ 
            passwordField: e.target.value
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
                            name = "username"
                            value={this.state.userNameField}
                            placeholder="username"
                            onChange={this.handleChangeUser}
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
                            name = "password"
                            value={this.state.passwordField}
                            placeholder="Enter your moms password"
                            onChange={this.handleChangePass}
                        />
                    <FormControl.Feedback />
                    </FormGroup>
                </Form>
                <Button 
                    onClick={this.sendLoginRequest}
                    bsStyle="primary"
                    type="submit">
                    Log me in daddy
                </Button>
                <Button 
                    onClick={this.sendLogoutRequest}
                    bsStyle="danger"
                    type="submit">
                    Log out
                </Button>
            </div>
        )
    }
}
  
  export default LoginComponent;
  