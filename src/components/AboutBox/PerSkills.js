import React, { Component } from 'react';

import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

class PerSkills extends Component {
  render(){

    var layoutSm = [
    {i: '1', x: 0, y: 0, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '2', x: 1, y: 0, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '3', x: 2, y: 0, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '4', x: 0, y: 1, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '5', x: 1, y: 1, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '6', x: 2, y: 1, w: 1, h: 2 ,isResizable:false, isDraggable:false}
    ];
    var layoutXs = [
    {i: '1', x: 0, y: 0, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '2', x: 1, y: 0, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '3', x: 0, y: 1, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '4', x: 1, y: 1, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '5', x: 0, y: 2, w: 1, h: 2 ,isResizable:false, isDraggable:false},
    {i: '6', x: 1, y: 2, w: 1, h: 2 ,isResizable:false, isDraggable:false}
    ];
    var layouts = { sm:layoutSm, xs:layoutXs};

    return (
      <div className="border_box_sk hight-limit center-block">
        <div className="container-fluid header">
        <h1>Skills</h1>
        <ResponsiveReactGridLayout className="layout" layouts={layouts} rowHeight={35}
           verticalCompact={true} margin={[2,2]}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 3, md: 3, sm: 3, xs: 2, xxs: 2}}>

            <div key={'1'} className="cont-skills">

            <a target="_blank" href="http://twitter.com">HTML CSS Bootstrap</a><br />
            <div className="progress">
              <div style={{width:"85%"}} className="progress-bar progress-bar-success  " role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >
                Adv-Pro
              </div>
            </div>

            </div>
            <div key={'2'} className="cont-skills">

            <a target="_blank" href="http://twitter.com">MySQL</a><br />
            <div className="progress">
              <div style={{width:"85%"}} className=" progress-bar progress-bar-success " role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >
                Adv-Pro
              </div>
            </div>

            </div>
            <div  key={'3'} className="cont-skills">

            <a target="_blank" href="http://twitter.com">Java (Android)</a><br />
            <div className="progress">
              <div style={{width:"75%"}} className="progress-bar progress-bar-success " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
                Average-Adv
              </div>
            </div>

            </div>
            <div key={'4'} className="cont-skills">

            <a target="_blank" href="http://twitter.com">PHP</a><br />
            <div className="progress">
              <div style={{width:"75%"}} className=" progress-bar progress-bar-success " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
                Average-Adv
              </div>
            </div>

            </div>
            <div key={'5'} className="cont-skills">

            <a target="_blank" href="http://twitter.com">ReactJS</a><br />
            <div className="progress">
              <div style={{width:"65%"}} className=" progress-bar progress-bar-warning " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" >
                Basic-Average
              </div>
            </div>

            </div>
            <div key={'6'} className="cont-skills">

            <a target="_blank" href="http://twitter.com">NodeJS</a><br />
            <div className="progress">
              <div style={{width:"65%"}} className=" progress-bar progress-bar-warning " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" >
                Basic-Average
              </div>
            </div>

            </div>

            </ResponsiveReactGridLayout>
        </div>{/*    //container-->*/}
      </div>
    );
  }
}

export default PerSkills;
