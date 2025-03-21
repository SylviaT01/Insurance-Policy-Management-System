import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<p>Welcome to our Insurance Policy Management System!</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
