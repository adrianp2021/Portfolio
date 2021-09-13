
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Home';
import Navbar from './Components/Navbar'
// import About from './Components/About';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
