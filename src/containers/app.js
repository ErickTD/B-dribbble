import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeContainer from './home';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route path="/" component={HomeContainer} />
      </Switch>
    </Router>
  </>
);

export default App;
