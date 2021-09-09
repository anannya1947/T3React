import React, {useState} from "react";
import Tweet from "./tweet";

function App(){
  
  const [users, setUsers] = useState([
    {name: 'Anahita', message: 'first tweet', likes: 23},
    {name: 'Anah', message: 'second tweet', likes: 123},
    {name: 'Ana', message: 'third tweet', likes: 423}
  ]);

  return (
    <div className="app">
      {users.map(user=>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
  );
}

export default App;
