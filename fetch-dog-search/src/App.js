import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import Match from './components/Match';
import Logout from './components/Logout';
import Login from './components/Login';
import './App.css';

function App() {
  return (
<BrowserRouter>
    <Nav />
    <body>
    <Routes>
      <Route exact path='/Fetch-Dog-Search-App/search' Component={Search}/>
      <Route exact path='/Fetch-Dog-Search-App/match/:id' Component={Match} />
      <Route exact path='/Fetch-Dog-Search-App/' Component={Login}/>
      <Route exact path='/Fetch-Dog-Search-App/logout' Component={Logout}/>
    </Routes>
    </body>
</BrowserRouter>
  );
}

export default App;
