import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import PolicyForm from './components/PolicyForm';
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-policy" element={<PolicyForm />} />
          <Route path="/policies" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
