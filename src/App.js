import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Create from "./components/Create";
import Success from "./components/Success";
import Footer from "./components/Footer";




function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create-task">
              <Create />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
