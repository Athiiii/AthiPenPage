import fontawesome from "@fortawesome/fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Button, ListItemText, Menu, MenuItem, Toolbar, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Color } from "../Enum/Color";
import "../style/main.scss";

fontawesome.library.add(faShoppingCart);

interface INavigationState {
  selectedItem: string
}

export class Navigation extends Component<{}, INavigationState> {

  public constructor(props, state: any) {
    super(props);

    this.state = {
      selectedItem: ""
    }
  }


  public athiPenClick = () => this.setState({ selectedItem: "athiPen" });
  public allProduktClick = () => this.setState({ selectedItem: "allProdukt" });
  public othersClick = () => this.setState({ selectedItem: "others" });

  public render(): React.ReactNode {
    const { selectedItem } = this.state;

    return (
      <AppBar position="static" className="bg-white">
        <Toolbar className="ml-auto">
          <Typography variant="h6" className="px-2">
            <a href="/" className="link-noStyle">
              <Button
                className={`orangeOnHover ${window.location.pathname === "/" ? "textUnderline" : "nav-btn"}`}
                disableRipple={true}
                focusRipple={false}
                onClick={this.athiPenClick}
              >
                AthiPen
            </Button>
            </a>
          </Typography>
          <Typography variant="h6" className="padding-x-10">
            <a href="/AllProducts" className="link-noStyle">
              <Button
                className={`orangeOnHover ${window.location.pathname.toLowerCase() === "/allproducts" ? "textUnderline" : "nav-btn"}`}
                disableRipple={true}
                focusRipple={false}
                onClick={this.allProduktClick}
              >
                All products
            </Button>
            </a>
          </Typography>
          <Typography variant="h6" className="padding-x-10">
            <a href="/Others" className="link-noStyle">
              <Button
                className={`orangeOnHover ${window.location.pathname.toLowerCase() === "/others" ? "textUnderline" : "nav-btn"}`}
                disableRipple={true}
                focusRipple={false}
                onClick={this.othersClick}
              >
                Others
            </Button>
            </a>
          </Typography>
          <FontAwesomeIcon size="lg" icon={"shopping-cart"} color={Color.Dark} className="orangeOnHover" />
        </Toolbar>
      </AppBar>
    );
  }
}