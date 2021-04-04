import React from 'react';
import './App.css';
import Content from "./components/Content";
import Header from "./components/lobby/Header";
import PlayerBox from "./components/lobby/PlayerBox";
// import Footer from "./components/lobby/Footer";

function App() {
  return (
   <Content>
     <Header />
     <PlayerBox />
     {/*<Footer/>*/}

   </Content>
  );
}

export default App;
