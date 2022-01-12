import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChecktRegistration from "./Components/ Registration/ChecktRegistration/ChecktRegistration";
import Counter from "./Components/Counter/Counter";
import Links from "./Components/Dish/Links/Links";
import Recepts from "./Components/Dish/Recepts/Recepts";
import Home from "./Components/Home/Home";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/recept" component={Recepts} />
          <Route exact path="/links" component={Links} />
          <Route
            exact
            path="/checktRegistration"
            component={ChecktRegistration}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
