import React, { Component } from 'react';

import SkyLight from 'react-skylight';



class FolioItem extends Component {
  render(){

    var myBigGreenDialog = {
          borderRadius:'2%',
          background: 'url(../images/bg2wood.jpg) repeat',
          color: '#ffffff',
          width: '70%',
          height: '500px',
          marginTop: '-250px',
          marginLeft: '-35%',
        };

    return (
      <div style={{display: 'inline-block center'}}>
      <div className=" box_border">
        <div className="WK">
          <h4>
            <a href="https://lagunalta.esy.es"
            target="_blank">Web Laguna Alta</a>
          </h4>


            <a className="a-bg" href="http://lagunalta.esy.es"
             target="_blank">
              <img className="img-thumbnail" src="images/trab1.jpeg"/>
            </a>



            <ul className="list-inline text-center">
              <li><a className=" btn btn-info" >
                <img data-toggle="modal" data-target={"#exMo1"} src="images/more.png"/></a>

              </li>
              <li><a className=" btn btn-success" href="http://lagunalta.esy.es"
               target="_blank">  <img src="images/web.png"/></a></li>
            </ul>

        </div>
      </div>

      <div  className="modal fade" id={"exMo1"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{background: "url(../images/bg2wood.jpg)  repeat"} }>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="exampleModalLabel">Project Name</h4>
            </div>
            <div className="border_box  modal-body">
              <div className="panel panel-default">
                <div className="panel-body">
                  Basic description example 1111111111111111111111111111
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="customDialog" title="A Custom Modal">
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj
      I'm a custom modal!dasdjfhasldkjfhasldkjfhalskjdfhljksdhfkljasdfjksadhflkjsadhfljksahdlfjksahdlfjkhsdjkfhsldkj

      </SkyLight>
    </div>
    );
  }
}

export default FolioItem;
