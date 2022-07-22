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
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
