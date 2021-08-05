import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

const App = () => {
  return (
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  );
};

export default App;
