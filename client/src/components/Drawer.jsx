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


const Drawer = (props) => {
  console.log('drawer', props)


  const toggleDrawer = () => {
  props.changeDrawer()
  }

  return(
    <div>
    <MUIDrawer open={props.drawerOpen} anchor='right' onClose={toggleDrawer}>
    <List>
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </MUIDrawer>
    </div>
  )
}


// const mapStateToProps = (state) => {
//   return {
//     drawerOpen: state.drawerOpen
//   }
// }



export default Drawer;