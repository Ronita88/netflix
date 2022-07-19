import "./App.css";
import data from "./movies.json";
import logo from "./assets/img/logo.png";
// import "./components/Header";

function App() {
  // console.log(data);
  return (
    <div>
      <header>
        <div className="logo">
          <img alt="netflix" src={logo} />
        </div>
      </header>
      <div className="container">
        <div>
          <ul>
            {data.map((elem, index) => {
              return (
                <li key={index}>
                  <span> {elem.category}</span>
                  <ul className="carousel">
                    {elem.images.map((pics, index) => {
                      return (
                        <li key={index}>
                          <img src={pics} />
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
