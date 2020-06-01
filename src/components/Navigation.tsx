import fontawesome from "@fortawesome/fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Color } from "../Enum/Color";
import "../style/main.scss";

fontawesome.library.add(faShoppingCart);

interface INavigationState {
}

export class Navigation extends Component<{}, INavigationState> {

  public constructor(props, state: any) {
    super(props);

    this.state = {
    }
  }

  public render(): React.ReactNode {

    return (
      <AppBar position="static" className="navigation">
        <Toolbar className="ml-auto navigation__toolbar">
          <h6 className="navigation__link">
            <a className="navigation__link_href navLinkAnimation" href="/"><span>AthiPen</span></a>
          </h6>
          <h6 className="navigation__link">
            <a className="navigation__link_href navLinkAnimation" href="/AllProducts"><span>All Products</span></a>
          </h6>
          <h6 className="navigation__link">
            <a className="navigation__link_href navLinkAnimation" href="/Others"><span>Others</span></a>
          </h6>
          <h6 className="ml-1">
            <FontAwesomeIcon size="lg" icon={"shopping-cart"} color={Color.Dark} className="navigation_icon" />
          </h6>
        </Toolbar>
      </AppBar >
    );
  }
}