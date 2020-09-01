import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.page.jsx";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { HatsPage } from "./pages/hats/hats.page.jsx";
import ShopPage from "./pages/shop/shop.page.jsx";
import { Header } from "./components/header/header.component";
import SigninUpPage from "./pages/signinup/signinup.component";

function App() {
  return (
    
    
      <Router>
      <Header/>
        <Switch>
          
          <Route path="/" exact component={Homepage} />
          <Route path="/sign" exact component = {SigninUpPage}/>
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    
  );
}

export default App;
