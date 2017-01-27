import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

//import '../../css/folioitem3.css';

class ItemWorkInfo extends Component {
  render(){

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];
    return(
      <div  className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{background: "url(../images/bg2wood.jpg)  repeat"} }>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="exampleModalLabel">{this.props.title}</h4>
            </div>
            <div className="border_box  modal-body">
              <div className="panel panel-default">
                <div className="panel-body">
                  <ImageGallery
                   items={images}
                   infinite={true}
                   showBullets={true}
                   slideInterval={2000}/>
                </div>
                <div style={{textAlign:"justify"}}>
                  <h2>Info</h2>
                  <p>{this.props.info}</p>
                  <h2>Dev Tools</h2>
                  <p>{this.props.tools}</p>
                  <h2>Dev Team</h2>
                  <p>{this.props.dev}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ItemWorkInfo;
