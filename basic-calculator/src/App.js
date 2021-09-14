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

  const equals = () =>{
    setResult(eval(result).toString());
  }

  const deleteLast = () =>{
    if(calc === ""){
      return;
    }
    const value = calc.slice(0, -1);
    setResult(value);
  }

  return (
    <div className="app">
      <div className="calci">

        <div className="display">
          {result? <span>({result})</span> : "" }&nbsp;
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
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {generateDigits()}
          <button onClick={() => updateCalc('0')}>
            0
          </button>
          <button onClick={() => updateCalc('.')}>
            .
          </button>
          <button onClick={equals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
