import React,{Component} from 'react';

class PerStudy extends Component {
  render(){

    return (
      <div className="border_box">
        <div className="container-fluid study">
        <h1>Education</h1>
        <ul className="list-group">
            <li className="list-group-item"><img src="images/twitter.png" role="presentation"/>
                <a target="_blank" href="http://twitter.com">System Engineer</a><br />
                <p>University Santa Maria (Venezuela-2009-2016)</p>
            </li>
        </ul>
            {/*<img className="col-sm-4 col-md-4 col-lg-3 center-block profile-image img-responsive img-circle" src="images/eRoshi.jpg" alt="DerNV" />
            <div className="col-sm-8 col-md-8 col-lg-offset-3 col-lg-6 profile-content">
              <div className="container-fluid center-block ">

                <h2>Web App Developer</h2>
                <ul className="social list-inline">
                    <li><a target="_blank" href="http://twitter.com"><img src="images/twitter.png"/></a></li>
                    <li><a target="_blank" href="http://twitter.com"><img src="images/twitter.png"/></a></li>
                    <li><a target="_blank" href="http://twitter.com"><img src="images/twitter.png"/></a></li>
                    <li><a target="_blank" href="http://twitter.com"><img src="images/twitter.png"/></a></li>
                </ul>
                <a className="center-block btn btn-primary bbttsize" href="http://themes.3rdwavemedia.com/" target="_blank"> Contact Me</a>
              </div>
            </div>{/*  //profile-->*/}
        </div>{/*    //container-->*/}
      </div>
    );
  }
}

export default PerStudy;
