import React, { Component } from 'react';

class PerLang extends Component {
  render(){

    return (
      <div className="border_box">
        <div className="container-fluid study">
        <h1>Languages</h1>
        <ul className="list-group">
            <li className="list-group-item">

            <a target="_blank" href="http://twitter.com">Spanish</a><br />
            <div className="progress">
              <div className="lang-pr-bar-1 progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
                Native
              </div>
            </div>

            </li>
            <li className="list-group-item">

            <a target="_blank" href="http://twitter.com">English</a><br />
            <div className="progress">
              <div className="lang-pr-bar-2 progress-bar progress-bar-success " role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
                Average-Advance
              </div>
            </div>

            </li>
            <li className="list-group-item">

            <a target="_blank" href="http://twitter.com">German</a><br />
            <div className="progress">
              <div className="lang-pr-bar-3 progress-bar progress-bar-warning " role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
                Basic
              </div>
            </div>

            </li>
        </ul>

        </div>{/*    //container-->*/}
      </div>
    );
  }
}

export default PerLang;
