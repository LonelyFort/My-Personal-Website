import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import ContactMe from "./components/Pages/ContactMe";
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
              <Route path="/contactme" element={<ContactMe/>} />
            </Routes>
          </Router>
      </div>
    </>
  );
}

export default App;