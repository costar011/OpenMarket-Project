import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AppShell from "./SearchBar";
import Home from "./Home";
import Clothing from "./Clothing";
import Cosmetics from "./Cosmetics";

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppShell>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/clothing" component={Clothing}></Route>
            <Route exact path="/cosmetics" component={Cosmetics}></Route>
          </div>
        </AppShell>
      </Router>
    );
  }
}

export default App;
