import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar";
import LandingPage from "./components/landing";
import Portfolio from "./components/portfolio";
import Blog from "./components/blog";
import About from "./components/about";
import NotFound from "./components/notFound";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="custom-container">
        <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
