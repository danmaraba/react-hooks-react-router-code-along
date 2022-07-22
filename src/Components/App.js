import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About/>}>
        </Route>
        <Route exact path="/login" element={<Login/>}>
        </Route>
        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
