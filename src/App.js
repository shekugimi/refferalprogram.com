import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
