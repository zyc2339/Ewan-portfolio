import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link className="link" to="home">
        <div className="App-header">
          <img src="/image/icon.png" className="App-logo" alt="logo" />
          <p>
            Hello, I'm <span style={{ color: "#e31b6d" }}>Ewan Zhang</span>.
          </p>
          <p>I am a full-stack developer.</p>
          <button>View my work</button>
        </div>
      </Link>
    </div>
  );
}

export default App;
