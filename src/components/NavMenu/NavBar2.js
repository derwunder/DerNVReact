import React, { Component } from 'react';
import { Link } from 'react-router';

import NavItem2  from './NavItem2';

import '../../css/nav2.css';
import Draggable, {DraggableCore} from 'react-draggable';
import $ from 'jquery';

import Headroom from 'react-headroom'

class NavBar2 extends Component {



  eventLogger = (e: MouseEvent, data: Object) => {
      console.log('Event: ', event);
      console.log('Data: ', data);
    };

  componentDidMount(){

  /*  if (window.DeviceOrientationEvent)
    {
        window.addEventListener("deviceorientation", function ()
        {
            processGyro(event.alpha, event.beta, event.gamma);
        }, true);
    }

    function processGyro(alpha,beta,gamma)
    {
    	document.getElementById("alpha").innerHTML=alpha;
    	document.getElementById("beta").innerHTML=beta;
    	document.getElementById("gamma").innerHTML =gamma;
    }*/

  /*  var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);*/



  }
  render() {


    var navStyle = {
            /*  position: "fixed",
              width: "100%",
              zIndex: 50,
              WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
              MozBoxShadow: "0 0 4px rgba(0,0,0.0.4)",
              boxShadow: "0 0 4px rgba(0,0,0,0.4)",
              borderRadius: 0*/

              /*data-toggle="collapse" data-target="#nav_expansor"*/

    };
    var textColor={color: "ffffff"};

    if (this.props.bgColor)
      navStyle.background = this.props.bgColor;

    var linkStyle = {}
    var titleStyle = {}

    if (this.props.linkColor)
      linkStyle.color = this.props.linkColor;

    if (this.props.titleColor)
      titleStyle.color = this.props.titleColor;

    var createLinkItem = function(item,index){
      return <NavItem2 key={item.title + index} href={item.href} title={item.title} aStyle={linkStyle} svgPath={item.svgPath}/>;
    };

    return (

            <Draggable
                        axis="y"
                        handle=".handle"
                        bounds= {{left: -31 , top: 0}}
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[1, 1]}
                        zIndex={100}
                        onStart={this.handleStart}
                        onDrag={this.handleDrag}
                        onStop={this.handleStop}>
        <nav style={navStyle} className="nav_menu" role="navigation">

          <ul  className="list-inline">
            <li>
              <label  className="expansor handle">
            <input type="checkbox"
              data-toggle="collapse" data-target="#nav_expansor"
              className="collapse collapsed" aria-expanded="false"/>
              <svg id="pep" fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
              </svg>
            </label>
            <div className="nvtc_poss">
              <div className="nvt_container">
                <span ><Link style={titleStyle} className="nav_title" to="/">DerNV</Link></span>
              </div>
            </div>
          </li>
          <li>

            <ul  className="list-inline collapse" aria-expanded="false" id="nav_expansor">

                {this.props.navData.map(createLinkItem)}

              {/*
              <li >
                <div>
                <a href="#" >
                <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"/>
                </svg>  <span>Home</span></a>
              </div>
              </li>





              <li>
                <div>
                  <a href="#" >
                <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                </svg>
                <span>Folio</span></a>
                </div>
              </li>
              <li>
                <div>
                <a href="#" >
                <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                <span>Folio2</span></a>
                </div>
              </li>

                */}

            </ul>
          </li>
        </ul>



        </nav>
</Draggable>

    );
  }
}

export default NavBar2;
