import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Highscore from "./Components/Highscore";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/HighScore" element={<Highscore />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
