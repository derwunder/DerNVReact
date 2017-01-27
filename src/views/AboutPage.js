import React, { Component } from 'react';

import PerPic   from '../components/AboutBox/PerPic';
import PerAbout from '../components/AboutBox/PerAbout';
import PerStudy from '../components/AboutBox/PerStudy';
import PerLang  from '../components/AboutBox/PerLang';
import PerSkills from '../components/AboutBox/PerSkills';

import ImgGal from '../components/ImgGal';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <PerPic/>
        <ImgGal/>
        <PerAbout/>
        <div className="marbox row">
          <div className="padbox col-sm-6"><PerStudy/></div>
          <div className="padbox col-sm-6"><PerLang/></div>
        </div>
      <PerSkills/>
      </div>
    );
  }
}

export default AboutPage;
