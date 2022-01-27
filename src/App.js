import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link className="link" to="home">
        <header className="App-header">
          <img src="/image/icon.png" className="App-logo" alt="logo" />
          <p>Hello, I'm Ewan Zhang.</p>
          <p>I am a full-stack developer</p>
          <button> View my work → </button>
        </header>
      </Link>
    </div>
  );
}

export default App;
