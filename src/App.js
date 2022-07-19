import "./App.css";
import "./movies.json";
import logo from "./assets/img/logoNetflix.png";
import "./components/Header";

function App() {
  return (
    <header>
      <div>
        <img alt="netflix" src={logo} />
      </div>
    </header>
  );
}

export default App;
