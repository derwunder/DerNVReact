import React, { Component } from 'react';
import Folio  from '../components/Folio/Folio';

//var Folio = require('./folioBox/Folio.jsx');

class PortfolioPage extends Component {
/*  getInitialState:function(){
    return{typeId:""};
  },
  componentDidMount:function(){
    this.setState({typeId:this.props.params.typeId});
  },
  componentWillReceiveProps:function(nextProps){
    this.setState({typeId:nextProps.params.typeId});
  },*/
  render(){
    var itemsWork =[
      {id:"1aa",
      workTitle:"App LongBook Ev",
      imgUrlBg:"url(../images/work1_por2.jpg) no-repeat",
      imgInfoUrlBg:"url(../images/lgbook_lg.png) center",
      descrTitle:"Come to see everything",
      descrInfo:"LongBook its an Android app for a community base on the game, they share their experience with other players and also help them to improve, always on top.",
      href:"https://play.google.com/store/apps/details?id=com.wos.dernv.evilbanefiends&amp;hl=es",
      info:"This gamer community are deditcate to share experience with other players, so they can also improve, getting part of the docs of EvilBane, they explain how the game works and the mechanic itself. Their Objective its to get followers in the game to form a great team players.",
      tools:"The App was develop with Android Studio were users can interact with their phone or tablet, the server side was develop with Php consumming a restful API.",
      dev:"The Project was develop stand-alone and it's maintain with an Ad system for the community",
      svgPathD:"M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
      },
      {
        id:"1aw",
        workTitle:"Lagunalta",
        imgUrlBg:"url(../images/trab1_lagu2.png) no-repeat",
        imgInfoUrlBg:"url(../images/trab1_lagu_info.png) center",
        descrTitle:"Come to see everything",
        descrInfo:"LongBook its an Android app for a community base on the game, they share their experience with other players and also help them to improve, always on top.",
        href:"http://lagunalta.esy.es/",
        info:"This gamer community are deditcate to share experience with other players, so they can also improve, getting part of the docs of EvilBane, they explain how the game works and the mechanic itself. Their Objective its to get followers in the game to form a great team players.",
        tools:"The App was develop with Android Studio were users can interact with their phone or tablet, the server side was develop with Php consumming a restful API.",
        dev:"The Project was develop stand-alone and it's maintain with an Ad system for the community",
        svgPathD:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
      }];

    return (
      <div>
        <Folio itemsData={itemsWork}/>
      </div>
    );
  }
}

export default PortfolioPage;
