import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import {Slider} from "./containers/Slider";
import {Cube} from "./containers/Cube";
import {Charts} from "./containers/Charts";
import {Move} from "./containers/Move";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Slider} />
            <Route path="/cube" component={Cube} />
            <Route path="/charts" component={Charts} />
            <Route path="/move" component={Move} />
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>

  );
}

export default App;
