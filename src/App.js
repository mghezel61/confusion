import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import { configureStore } from "./redux/configureStore";

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
