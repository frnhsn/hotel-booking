import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';

import './assets/scss/style.scss';

function NotFound(props) {
  return <div>Not Found</div>
} 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/example" component={Example}></Route>
        <Route path='*' exact={true} component={NotFound}/>
        <Redirect from='*' to='/404' />

      </Switch>
    </div>
  );
}

export default App;
