import react,{useEffect, useState} from 'react';
import './App.css';

const App = () => {

  //edamam API authorization identities
  const APP_ID = "20b3d753";
  const APP_KEY = "05e84cda3944b64dad730cb86f1ff7ac";

  //reloads content of the page at a specific instant
  useEffect(() =>{
    getRecipies();
  }, []);

  //Makes API call 
  const getRecipies = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
