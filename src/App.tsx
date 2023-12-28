import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './app/useState/Counter'
import StyleEmlent from './app/UseRef/StyleEmlent';
import UseMemo from './app/UseMemo/UseMemo';
import CounterRead from './app/Redux/counterRead';
import Todogame from './XoGame/todogame';

function App() {
  return (
    <div>
      {/* <Counter/>
      <StyleEmlent/>
      <UseMemo/>  */}
      <CounterRead />
      {/* <Todogame/> */}
    </div>
  );
}

export default App;
