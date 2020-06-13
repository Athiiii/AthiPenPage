import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "../style/main.scss";
import { AllProducts } from "./AllProducts";
import { AthiPen } from "./AthiPen";
import { Contact } from "./Contact";
import { Navigation } from "./Navigation";
import { OurStory } from "./OurStory";
import { Redirect } from "react-router";
import { Footer } from "./Footer";

interface IHomeProps {
  location: any;
}


export class Home extends Component<IHomeProps> {
  static displayName = Home.name;

  public render(): React.ReactNode {
    const { location } = this.props;
    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout = { enter: 300, exit: 200 }
    return (
      <div>
        <Navigation location={location} />
        <TransitionGroup component="main" className="page-main">
          <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
            <section className="page-main-inner">
              <Switch>
                <Route exact path="/Contact">
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
                <Route exact path="*">
                  <Redirect to="/" />
                </Route>
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}
