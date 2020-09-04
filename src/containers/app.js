import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeContainer from './home';
import LegalContainer from './legal';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route path="/legal" component={LegalContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </Router>
  </>
);

export default App;
