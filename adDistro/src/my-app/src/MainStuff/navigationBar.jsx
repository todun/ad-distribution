import React, { Component } 
from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from "react-bootstrap";


class NavigationBar extends React.Component {

    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                    Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            // <div className="navbar">
                // <Navbar fixedTop={true}>
                //     <Navbar.Header>
                //         <Navbar.Brand>
                //         <a href="#home">Ad Distro</a>
                //         </Navbar.Brand>
                //         <Navbar.Toggle />
                //     </Navbar.Header>
                //     <Navbar.Collapse>
                //         <Navbar.Text>
                //         Signed in as: <Navbar.Link href="#">Henry's Truong</Navbar.Link>
                //         </Navbar.Text>
                //         <Navbar.Text pullRight>ur mum gay!</Navbar.Text>
                //     </Navbar.Collapse>
                //     </Navbar>
            // </div>
        )
    }
}
  
  export default NavigationBar;
  