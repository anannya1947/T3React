import React, {useState} from "react";

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ['+', '-', '*', '/', '.'];

  const updateCalc = value =>{
    if(
      operators.includes(value) && calc === "" ||
      operators.includes(value) && operators.includes(calc.slice(-1))
    ){
      return;
    }

    setCalc(calc + value);

    if(!operators.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const generateDigits = () =>{
    const numbers = [];

    for(let i=1; i<10; i++){
      numbers.push(
      <button 
        onClick={() => updateCalc(i.toString())} 
        key={i}>
          {i}
      </button>
      );
    }

    return numbers;
  }

  return (
    <div className="app">
      <div className="calci">

        <div className="display">
          {result? <span>({result})</span> : "" }
          {calc || 0}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('+')}>
            +
          </button>
          <button onClick={() => updateCalc('-')}>
            -
          </button>
          <button onClick={() => updateCalc('*')}>
            *
          </button>
          <button onClick={() => updateCalc('/')}>
            /
          </button>
          <button>DEL</button>
        </div>

        <div className="digits">
          {generateDigits()}
          <button onClick={() => updateCalc('0')}>
            0
          </button>
          <button onClick={() => updateCalc('.')}>
            .
          </button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
