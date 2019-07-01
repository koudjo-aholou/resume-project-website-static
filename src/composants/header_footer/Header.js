import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {

  state = {
    drawerOpen: false,
    headerShow: false,
  }

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen : value
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
    handleScroll = () => {
      if(window.scrollY >0) {
        this.setState({
          headerShow : true
        })
      } else {
        this.setState({
          headerShow : false
        })

      }
    }

  render() {
    return(
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0",
        }}
        >
          <ToolBar>
            <div className="header_logo">
              <div className="font_righteouse header_logo_venue">The SlapBet </div>
              <div className="header_logo_title">Slap is Coming</div>
            </div>

            <IconButton>
              <MenuIcon
                aria-label="Menu"
                color="secondary"
                onClick={()=> this.toggleDrawer(true)}
              />
            </IconButton>

            <SideDrawer
              open={this.state.drawerOpen}
              onClose={(value) => this.toggleDrawer(value)}
            />

          </ToolBar>
      </AppBar>
    );

  }
}
export default Header;
