import React from 'react';


import './App.css';
import Content from "./components/Content";
import Header from "./components/lobby/Header";
import PlayerBox from "./components/lobby/PlayerBox";

function App() {
  return (
   <Content>
     <Header />
     <PlayerBox />

   </Content>
  );
}

export default App;
