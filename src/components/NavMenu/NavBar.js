import React, { Component } from 'react';
import { Link } from 'react-router';

import NavItem  from './NavItem';


class NavBar extends Component {
  render() {

    var navStyle = {
              position: "fixed",
              width: "100%",
              zIndex: 50,
              WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
              MozBoxShadow: "0 0 4px rgba(0,0,0.0.4)",
              boxShadow: "0 0 4px rgba(0,0,0,0.4)",
              borderRadius: 0
    };

    if (this.props.bgColor)
      navStyle.background = this.props.bgColor;

    var linkStyle = {}
    var titleStyle = {}

    if (this.props.linkColor)
      linkStyle.color = this.props.linkColor;

    if (this.props.titleColor)
      titleStyle.color = this.props.titleColor;

    var createLinkItem = function(item,index){
      return <NavItem key={item.title + index} href={item.href} title={item.title} aStyle={linkStyle}/>;
    };

    return (
      <div className="nav-container">
        <nav style={navStyle} className="navbar navbar-inverse  navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#nav-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link style={titleStyle} className="navbar-brand" to="/">DerNV</Link>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
