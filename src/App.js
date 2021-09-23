import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Privacy from "./Privacy";
import Sharemarket from "./Sharemarket";
import Upirefercards from "./Upirefercards";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/privacy" component={Privacy}/>
        <Route path="/sharemarket" component={Sharemarket}/>
        <Route path="/upiapps" component={Upirefercards}/>

      </Switch>
    </>
  );
}

export default App;
