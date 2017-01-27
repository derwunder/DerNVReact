import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import '../../css/folioitem3.css';

import ItemWorkInfo from '../ItemWorkInfo';



class FolioItem3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tap: false
    };
    this.handleTap = this.handleTap.bind(this);

  }

  handleTap(){
    var d = document.getElementById(this.props.itemData.id);
    if(this.state.tap==false){
      d.classList.add("movie2");
      this.setState({tap:true});
    }
    else{
      d.classList.remove("movie2");
      this.setState({tap:false});
    }

  }

  render(){


    return (

<div style={{display: 'inline-block',textAlign:'center', margin:'10px'}}>
      <div  className="scene" >
        <Hammer onTap={this.handleTap} >
        <div id={this.props.itemData.id} className="movie ">
          <div className="poster"
             style={{background:this.props.itemData.imgUrlBg,backgroundSize: '100% 100%'}}>
            <div><h1>{this.props.itemData.workTitle}</h1></div>
            <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path d="M0 0h24v24H0V0z" id="a"/>
                </defs>
                <path  d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/>
            </svg>
        </div>
          <div className="info">
            <header style={{background:this.props.itemData.imgInfoUrlBg,backgroundSize: 'contain'}} >
            <div>
              <h1>{this.props.itemData.descrTitle}</h1>
              {/*<span className="year">1946</span>
              <span className="rating">PG</span>
              <span className="duration">130 minutes</span>*/}</div>
            </header>
            <ul className="list-inline">
              <li><a href="#" data-toggle="modal" data-target={"#"+this.props.itemData.id+"mo"}><svg fill="#FFFFFF" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg></a></li>
              <li><a target="_blank" href={this.props.itemData.href}><svg xmlns="http://www.w3.org/2000/svg"
                version="1.1" width="36" height="36" viewBox="0 0 24 24">
                <path d={this.props.itemData.svgPathD} />
              </svg></a></li>
            </ul>
            <p>
              {this.props.itemData.descrInfo}
            </p>
          </div>
        </div>
        </Hammer>
      </div>
        <ItemWorkInfo id={this.props.itemData.id+"mo"} title= {this.props.itemData.workTitle} info={this.props.itemData.info} tools={this.props.itemData.tools}
        dev={this.props.itemData.dev}/>
      </div>


    )
  }
}

export default FolioItem3;
