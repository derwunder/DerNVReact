import React, { Component } from 'react';

import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

class GridExample extends Component {

  render() {

    var layoutSm = [
    {i: 'a', x: 0, y: 0, w: 1, h: 1},
    {i: 'b', x: 0, y: 0, w: 1, h: 1},
    {i: 'c', x: 0, y: 0, w: 1, h: 1}
    ];
    var layouts = { sm:layoutSm};

    return (
      <ResponsiveReactGridLayout className="layout" layouts={layouts} rowHeight={30}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <div key={'a'}><span>aca 1</span></div>
        <div key={'b'}><span>bueno 2</span></div>
        <div key={'c'}><span>cerrar 3</span></div>
      </ResponsiveReactGridLayout>
    );
  }
}

export default GridExample;
