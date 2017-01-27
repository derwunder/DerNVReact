import React, { Component } from 'react';
import { Router, Route, IndexRoute  } from 'react-router';
import PageMain from './views/PageMain';
import AboutPage from './views/AboutPage';
import PortfolioPage  from './views/PortfolioPage';




var ReactRouter = require('react-router');
var History = ReactRouter.useRouterHistory;
var CreateHashHistory= require('history/lib/createHashHistory');

var AppHistory = History(CreateHashHistory)({ queryKey: false });

class Routes extends Component {
  render() {
    return (
      <Router history={AppHistory} >
        <Route path="/" component={PageMain}>
          <IndexRoute  component={AboutPage}/>
          <Route path="/portfolio" component={PortfolioPage}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
