import React from "react";

function App() {

  const generateDigits = () =>{
    const numbers = [];

    for(let i=1; i<10; i++){
      numbers.push(<button key={i}>{i}</button>);
    }

    return numbers;
  }
  return (
    <div className="Calci">

      <div className="display">
        <span>(0)</span>0
      </div>

      <div className="operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>DEL</button>
      </div>

      <div className="digits">
        {generateDigits()}
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
