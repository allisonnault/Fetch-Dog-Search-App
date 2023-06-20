import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import Match from './components/Match';
import Logout from './components/Logout';
import Login from './components/Login';
import './App.css';

function App() {
  return (
<HashRouter>
    <Nav />
    <body>
    <Routes>
      <Route exact path='/search' Component={Search}/>
      <Route exact path='/match/:id' Component={Match} />
      <Route exact path='/' Component={Login}/>
      <Route exact path='/logout' Component={Logout}/>
    </Routes>
    </body>
</HashRouter>
  );
}

export default App;
