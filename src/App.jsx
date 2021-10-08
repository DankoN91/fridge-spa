import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Fridge } from "./components/fridge";
import { Meals } from "./components/meals";
import { Login } from "./components/login";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              margin: 0,
              padding: 0,
              width: "250px",
            }}
          >
            {loggedIn ? (
              <div>
                <li>
                  <Link to="/fridge" style={{ color: "blue" }}>
                    Fridge
                  </Link>
                </li>
                <li>
                  <Link to="/meals" style={{ color: "blue" }}>
                    Meals
                  </Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/login" style={{ color: "blue" }}>
                    Would you like to log in?
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </nav>

        <Switch>
        <Route exact path="/login">
            <Login />
          </Route>
        <Route path="/meals"><Meals /></Route>
        <Route path="/fridge"><Fridge /></Route>
          <Route path="/">{loggedIn ? <Fridge /> : <Login />}</Route>
          
          
          
        </Switch>
      </div>
    </Router>
  );
}
