
import './App.css';
import React from "react";
import Navbar  from "./components/Navbar.jsx";
import Display from "./components/Display.jsx";
import Login from "./components/Login.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Display/><Login/>
    </div>
  );
}

export default App;
