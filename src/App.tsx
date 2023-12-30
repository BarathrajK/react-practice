import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './app/useState/Counter'
import StyleEmlent from './app/UseRef/StyleEmlent';
import UseMemo from './app/UseMemo/UseMemo';
import CounterRead from './app/Redux/counterRead';
import Todogame from './XoGame/todogame';
import User from './app/UserCrud/userForm';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import UserForm from './app/UserCrud/userForm';

function App() {
  return (
    // <div>
    //   <Counter/>
    //   <StyleEmlent/>
    //   <UseMemo/> 
    //   <CounterRead />
    //   <Todogame/>
    //   <User />
    // </div>
    <Router>
      <Routes>
        <Route path='/' Component={UserList}/>
        <Route path= '/createUser' Component={UserForm}/>
      </Routes>
    </Router>
  );
}

export default App;
