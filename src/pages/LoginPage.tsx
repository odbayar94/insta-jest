import React, { useEffect,useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import Cookies from "js-cookie";

import classNames from "classnames";

function LoginPage(){
 
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label="Hello"></Button>
      </header>
   
    </div>
  );
}

export default LoginPage;