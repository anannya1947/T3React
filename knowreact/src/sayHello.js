import React from "react";

function Hello(){
    const sayHello = ()=>{
        console.log("Hey");
    };

    return(
    <div>
      <h3>This is the Hello Component</h3>  
      <button onClick={sayHello}>Click Here</button>
    </div>
    );
}

export default Hello;