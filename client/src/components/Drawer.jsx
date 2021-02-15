import React, { useState } from 'react';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {  Drawer as MUIDrawer } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Teko',
      'sans-serif',
    ].join(','),
  },});

const useStyles = makeStyles({
  darkDrawer: {
    width: 90,
    color: '#141618',
    backgroundColor: '#bc9d57',
    height: 10000,
  }
});


const Drawer = (props) => {
  console.log('LOCATION', window.location)
  const classes = useStyles();
  const { history } = props;
  console.log('drawer', props)


  const toggleDrawer = () => {
  props.changeDrawer()
  }

  const itemList = [
    {
      text: 'HOME',
      onClick: () => { history.push('/')
       toggleDrawer()
     }
    },
    {
      text: 'ABOUT',
      onClick: () =>  { history.push('/About')
       toggleDrawer()
     }
    },
    {
      text: 'PROJECTS',
      onClick: () => { history.push('/Projects')
      toggleDrawer()
     }
    },
    {
      text: 'RESUME',
      onClick: () => { window.open("https://drive.google.com/file/d/1e1shPBbqPoF1es5hwXwudAZYg54vjZlm/view?usp=sharing", '_blank'
      )
      toggleDrawer()
    }
    },
    {
      text: 'CONTACT',
      onClick: () => { history.push('/Contact')
      toggleDrawer()
    }
    }
  ]

  return(
    <div>
    <ThemeProvider theme={theme}>
    <MUIDrawer className={classes.drawer} open={props.drawerOpen} anchor='right' onClose={toggleDrawer}>
    <List className={classes.darkDrawer}>
          {itemList.map((link, index) => (
            <ListItem button onClick={link.onClick} key={link.text}>
              <ListItemText className={classes.drawerText} primary={link.text} />
            </ListItem>
          ))}
        </List>
    </MUIDrawer>
    </ThemeProvider>
    </div>
  )
}


// const mapStateToProps = (state) => {
//   return {
//     drawerOpen: state.drawerOpen
//   }
// }



export default withRouter(Drawer);