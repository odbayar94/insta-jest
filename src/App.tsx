import React, {Suspense, lazy, useState} from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import PrivateRoute from "./routes/PrivateRoute";

import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import Button from './component/button/button'
import './App.css';

function App() {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact={false} component={LoginPage}/>
      </Switch>
      </BrowserRouter>
      
    </Suspense>
  );
}

export default App;
