import React, { Component } from 'react';

import FolioItem from './FolioItem';
import FolioItem2 from './FolioItem2';
import FolioItem3 from './FolioItem3';


import ImgGal from '../ImgGal';
import IconoEye from '../IconoEye';
import GridExample from '../GridExample';




class Folio extends Component {

  render(){

    var createItemWork = function(item,index){
      return <FolioItem3
         key={item.id + index}
         itemData={item}/>;
    };

    return (
      <div className="border_box">
        <div id="box_folio">
          <h1>Portfolio</h1>
          <h3 className="text-center" >Lastest projects</h3>

          {this.props.itemsData.map(createItemWork)}


{/*<li>
  <ImgGal/>
</li>
<li>
  <IconoEye />
</li>
<li><GridExample/></li>
<FolioItem/>
<FolioItem2/>
*/}




        </div>
      </div>
    );
  }
}

export default Folio;
