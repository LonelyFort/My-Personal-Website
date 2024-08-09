import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Experience from "./components/Pages/Experience";
import Projects from "./components/Pages/Projects/Projects";
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
              <Route path="/experience" element={<Experience/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
          </Router>
      </div>
    </>
  );
}

export default App;