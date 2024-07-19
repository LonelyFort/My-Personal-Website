import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Socials from "./components/Pages/Socials";
import Projects from "./components/Pages/Projects";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/socials" element={<Socials/>} />
            </Routes>
          </Router>
      </div>
    </>
  );
}

export default App;