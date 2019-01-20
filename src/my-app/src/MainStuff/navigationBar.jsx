import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ButtonAppBar);

// class NavigationBar extends React.Component {

//     render() {
//         return(
//             <Navbar>
//             <Navbar.Header>
//               <Navbar.Brand>
//                 <a href="#home">React-Bootstrap</a>
//               </Navbar.Brand>
//             </Navbar.Header>
//             <Nav>
//               <NavItem eventKey={1} href="#">
//                 Link
//               </NavItem>
//               <NavItem eventKey={2} href="#">
//                 Link
//               </NavItem>
//               <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//                 <MenuItem eventKey={3.1}>Action</MenuItem>
//                 <MenuItem eventKey={3.2}>Another action</MenuItem>
//                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                 <MenuItem divider />
//                 <MenuItem eventKey={3.4}>Separated link</MenuItem>
//               </NavDropdown>
//             </Nav>
//           </Navbar>
//                 )
//     }
// }
  
// export default NavigationBar;
  