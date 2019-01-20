import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import FullStackDeveloper from "../assets/FullStackDeveloper.png";
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 850,
      backgroundColor: theme.palette.background.paper,
    },
    title:{
      fontSize:'1em',//Insert your required size
    },
    smalltitle:{
      fontSize:'0.5em'
    },
    mediumtitle:{
      fontSize:'0.8em'  
    },
    listitem:{
      height: 100
    },
    avatar:{
      width: 90,
      height: 90
    }
  });

class AdRows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: [0]
        } 
      }

      handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        this.setState({
          checked: newChecked,
          openModalId: ""
        });
      };

      handleOnClick = () => {
        console.log(this.props.id)
        this.props.getCurrentRow(this.props.id);
      }

    render() {
        const { classes } = this.props;

        return (
            <ListItem key={this.props.id} button className={classes.listitem}>
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt={`Avatar n°${this.props.id + 1}`}
                src={FullStackDeveloper}
                onClick = {this.handleOnClick}
                id={this.props.id}
              />
            </ListItemAvatar>
            <ListItemText primary={`Ivan ${this.props.id + 1}`} className={classes.title}
                secondary={
                <React.Fragment>
                  <Typography component="span" className={classes.smalltitle} color="textPrimary">
                    Description
                  </Typography>
                  </React.Fragment>}
            />
            <ListItemText primary={`${this.props.id + 1} Dollars`} className={classes.mediumtitle}
                secondary={
                <React.Fragment>
                  <Typography component="span" className={classes.mediumtitle} color="textPrimary">
                    Chinatown
                  </Typography>
                  </React.Fragment>}
            />
            <ListItemText primary={`${this.props.id + 1} hour(s) ago`} className={classes.mediumtitle}
                secondary={
                <React.Fragment>
                  <Typography component="span" className={classes.mediumtitle} color="textPrimary">
                    gg easy
                  </Typography>
                  </React.Fragment>}
            />                      
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(this.props.id)}
                checked={this.state.checked.indexOf(this.props.id) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
    }
}

AdRows.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AdRows);