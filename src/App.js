
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Footer from './Components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>

      <Route path="/contact">
          <Contact />
        </Route>


        <Route path="/">
          <Home />
        </Route>



      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
