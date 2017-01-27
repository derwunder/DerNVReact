import React, { Component } from 'react';
import { Link } from 'react-router';


class NavItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  //  this.hover = this.hover.bind(this);
  this.mouseOver = this.mouseOver.bind(this);
  this.mouseOut = this.mouseOut.bind(this);

  }
  mouseOver() {
      this.setState({hover:true});

  }
  mouseOut() {
      this.setState({hover:false});
  }

  render() {
    return (
      <li className={this.state.hover ? "active" : ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
            <Link style={this.props.aStyle} to={this.props.href} >{this.props.title}</Link>
          </li>
    );
  }
}

export default NavItem;
