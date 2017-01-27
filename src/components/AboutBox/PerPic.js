import React, { Component } from 'react';

class PerPic extends Component {
  render(){

    
    return (
      <div className="border_box">
      <header className="header">
        <div className="container-fluid row">
            <img className="col-sm-4 col-md-4 col-lg-3 center-block profile-image img-responsive img-circle" src="images/eRoshi.jpg" alt="DerNV" />
            <div className="col-sm-8 col-md-8  col-lg-8 profile-content">
              <div className="container-fluid center-block ">
                <h1 className="text-center">Der Wunder Nunez</h1>
                <h2 className="text-center">Web App Developer</h2>
                <ul className="text-center list-inline">
                    <li><a target="_blank" href="https://twitter.com/Derwunder"><img src="images/twitter.png" role="presentation"/></a></li>
                    <li><a target="_blank" href="https://github.com/derwunder"><img src="images/github-circle.png" role="presentation"/></a></li>
                </ul>
                <a className="center-block btn btn-primary bbttsize " type="button"
                href="https://twitter.com/Derwunder" target="_blank">Contact Me</a>
              </div>
            </div>{/*//profile-->*/}
        </div>{/*//container-->*/}
      </header>{/*//header-->*/}
      </div>
    );
  }
}

export default PerPic;
