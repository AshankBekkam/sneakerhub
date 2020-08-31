import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.page.jsx";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { HatsPage } from "./pages/hats/hats.page.jsx";
import ShopPage from "./pages/shop/shop.page.jsx";

function App() {
  return (
   
      <Router>
      <Switch>
        <Route path = "/" exact component = {Homepage}/>
        <Route exact path = "/shop"  component = {ShopPage}/>
      </Switch>
      </Router>
      //<Homepage/>
      
    
  );
}

export default App;
