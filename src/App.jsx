import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fridge } from "./components/fridge";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Fridge</Link>
            </li>
            <li>
              <Link to="/meals">Meals</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/meals">{/* <About /> */}</Route>
          <Route path="/">
            <Fridge />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
