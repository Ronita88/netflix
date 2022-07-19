import "./App.css";
import categories from "./movies.json";
import logo from "./assets/img/logo.png";
// import "./components/Header";

function App() {
  console.log(data);
  return (
    <div>
      {" "}
      <header>
        <div className="logo">
          <img alt="netflix" src={logo} />
        </div>
      </header>
      <div>
        <h1></h1>
        <div>
          const categories = [{name: "Reprendre avec"}, {name: "Comédies"}, {name: "Dessins animés"}, {name: "Documentaires"} {name: "Tendances actuelles"}];
            return (
              <ul>
                {categories.map ((category, index)=> {
                  return <li key={index}><span>movie</span></li>
                }
                )}
              </ul>
            )

        </div>
      </div>
    </div>
  );
}

export default App;
