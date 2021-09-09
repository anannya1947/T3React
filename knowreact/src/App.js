import React, {useState} from "react";
import Tweet from "./tweet";

function App(){
  
  const [isRed, setRed] = useState(false);
  const [count, setCount] =  useState(0);

  const increment = ()=>{
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <h1 className={isRed? "red" : ""}>Change Color</h1>
      <button onClick={increment}>Press</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
