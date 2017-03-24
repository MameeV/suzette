/**
*
* NavMobile
*
*/

import React from 'react';
import Burger from 'material-ui/svg-icons/Navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {Link} from "react-router";

class NavMobile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      menuOpen: false,
      activeItem:0
    }
  }

  handleMenu = () => {
    this.setState({
      menuOpen: true
    })
  }
  render() {
    const topBurger={
      background: "#B4938C"
    }
    const linkStyleMobile={
      background: "#FAE0EE",
      textDecoration: "none",
      fontFamily: "Raleway",
      fontWeight: "Bold",
      fontSize: "100%",
      color: "#B4938C",
    }
    const drawerStyle={
      background: "#FAE0EE"
    }
    return (
      <div>
        <nav>
          <div style={topBurger}>
            <IconButton onTouchTap={this.handleMenu}> <Burger/> </IconButton>
          </div>
        <Drawer
          containerStyle={drawerStyle}
          docked={false}
          width={90}
          open={this.state.menuOpen}
          onRequestChange={(menuOpen) => this.setState({menuOpen})}
        >
          <MenuItem>
            <Link style={linkStyleMobile} to="/"> Home </Link>
          </MenuItem>
          <MenuItem>
            <Link style={linkStyleMobile} to="/articles"> Articles </Link>
          </MenuItem>
          <MenuItem>
            <Link style={linkStyleMobile} to="/links"> Links </Link>
          </MenuItem>
        </Drawer>
        </nav>
      </div>
    );
  }
}

export default NavMobile;
