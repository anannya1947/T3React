import react,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  //edamam API authorization identities
  const APP_ID = "20b3d753";
  const APP_KEY = "05e84cda3944b64dad730cb86f1ff7ac";

  const [recipes, setRecipes] = useState([]);

  //reloads content of the page at a specific instant
  useEffect(() =>{
    getRecipes();
  }, []);

  //Makes API call 
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">

      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>

      {recipes.map(list => (
        <Recipe 
          key={list.recipe.label}
          title={list.recipe.label}
          calories={list.recipe.calories}
          image={list.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
