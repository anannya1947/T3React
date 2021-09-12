import react from 'react';
import './App.css';

const App = () => {

  const APP_ID = "20b3d753";
  const APP_KEY = "05e84cda3944b64dad730cb86f1ff7ac";
  const example = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=APP_ID&app_key=APP_KEY&type=public`;

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
