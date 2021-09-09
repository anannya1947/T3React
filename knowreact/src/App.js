import React from "react";
import Tweet from "./tweet";

function App(){
  
  return (
    <div className="app">
      <Tweet name="Alina" message="first tweet" likes="64"/>
      <Tweet name="Aub" message="random tweet" likes="564"/>
      <Tweet name="Sob" message="third tweet" likes="1064"/>
      <Tweet name="Bob" message="nobody cares tweet" likes="634"/>
    </div>
  );
}

export default App;
