import React from "react";
import "./App.css";
import Navbar from "./conponents/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactState from "./context/contact/ContactState";
function App() {
  return (
    <ContactState>
      <Router>
        <>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </ContactState>
  );
}

export default App;
