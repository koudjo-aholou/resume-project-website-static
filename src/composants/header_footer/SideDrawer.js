import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
      scroller.scrollTo(element, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -80,
      })
      props.onClose(false)

    }
    return (
      <Drawer
        anchor="right"
        open={props.open}
        onClose={(value) => props.onClose(false)}
      >
        <List component="nav">
          <ListItem button onClick = {() => scrollToElement('Countdown') }>
            Countdown
          </ListItem>

          <ListItem button onClick = {() => scrollToElement('Info') }>
            Info
          </ListItem>

          <ListItem button onClick = {() => scrollToElement('Rules') }>
            Rules & Video
          </ListItem>

          <ListItem button onClick = {() => scrollToElement('Characters') }>
            Characters
          </ListItem>

          <ListItem button onClick = {() => scrollToElement('Location') }>
            Location
          </ListItem>

        </List>
      </Drawer>
    );
}

export default SideDrawer;
