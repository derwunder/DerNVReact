import React, { Component } from 'react';


class FolioItem2 extends Component {
  render(){

    return (
      <div style={{display: 'inline-block center'}}>
      <div className=" box_border">
        <div className="WK">
          <h4>
            <a href="https://play.google.com/store/apps/details?id=com.wos.dernv.evilbanefiends&amp;hl=es"
            target="_blank">App LongBook EvilBane</a>
          </h4>
            <a className="a-bg" href="https://play.google.com/store/apps/details?id=com.wos.dernv.evilbanefiends&amp;hl=es"
             target="_blank">
              <img className="img-thumbnail" src="images/lgbook_lg.png"/>
            </a>

            <ul className="list-inline text-center">
            <li><a className=" btn btn-info"><img data-toggle="modal" data-target={"#exMo2"} src="images/more.png"/></a></li>
              <li><a className=" btn btn-success" href="https://play.google.com/store/apps/details?id=com.wos.dernv.evilbanefiends&amp;hl=es"
               target="_blank">  <img src="images/google-play.png"/></a></li>
            </ul>

        </div>
      </div>
      <div  className="modal fade" id={"exMo2"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{background: "url(../images/bg2wood.jpg)  repeat"} }>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="exampleModalLabel">Project Name</h4>
            </div>
            <div className="border_box  modal-body">
              <div className="panel panel-default">
                <div className="panel-body">
                  Basic description example 222222222
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    );
  }
}

export default FolioItem2;
