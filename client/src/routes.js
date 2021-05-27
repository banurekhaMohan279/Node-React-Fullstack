/*eslint-disable */
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App.js';

export default function Routes(){
  return(
    <BrowserRouter>
      <Route exact path = '/'> <App/> </Route>
    </BrowserRouter>
  )
}
