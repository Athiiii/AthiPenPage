import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation";
import { AthiPen } from "./AthiPen";
import { Contact } from "./Contact";
import { AllProducts } from "./AllProducts";
import { OurStory } from "./OurStory";
import "../style/main.scss";

export class Home extends Component {
  static displayName = Home.name;

  public render(): React.ReactNode {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/AllProducts">
            <AllProducts />
          </Route>
          <Route exact path="/OurStory">
            <OurStory />
          </Route>
          <Route exact path="/">
            <AthiPen />
          </Route>
        </Switch>
      </div>
    );
  }
}
