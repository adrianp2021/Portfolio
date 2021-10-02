import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
