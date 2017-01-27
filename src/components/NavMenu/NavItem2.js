import React, { Component } from 'react';
import { Link } from 'react-router';


class NavItem2 extends Component {

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

      <li >
        <div>
        <Link style={this.props.aStyle} to={this.props.href} >
        <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
          <path d={this.props.svgPath} />
        </svg>  <span>{this.props.title}</span></Link>
      </div>
      </li>
    );
  }
}

export default NavItem2;
