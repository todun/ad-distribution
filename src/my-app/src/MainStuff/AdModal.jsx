import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
import {Modal, Tabs, Tab} from "react-bootstrap";
import {form, FormGroup, ControlLabel, FormControl} from "react-bootstrap";

export default class AdPanels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true
        }
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    render() {
        return(
            <div>
                <Modal
                    show={this.state.open} 
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="General">
                            <form>
                                <FormGroup controlId={"titleText"}>
                                    <ControlLabel>{"Text"}</ControlLabel>
                                    <FormControl {...this.props}/>
                                </FormGroup>
                                <FormGroup controlId="Description">
                                    <ControlLabel>{"Description"}</ControlLabel>
                                    <FormControl {...this.props}/>
                                </FormGroup>
                                <FormGroup controlId="Price">
                                    <ControlLabel>{"Price"}</ControlLabel>
                                    <FormControl {...this.props}/>
                                </FormGroup>
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Select</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                </FormGroup>
                            </form>

                        </Tab>
                        <Tab eventKey={2} title="Ebay">
                            Ebay
                        </Tab>
                        <Tab eventKey={3} title="Kijiji">
                            Kijiji
                        </Tab>
                    </Tabs>
                    </Modal.Header>
                </Modal>
            </div>
        )
    }
}
