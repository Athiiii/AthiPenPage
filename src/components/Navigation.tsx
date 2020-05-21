import fontawesome from "@fortawesome/fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Color } from "../Enum/Color";
import "../style/style.css";

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
        <Toolbar className="marginLeftAuto">
          <Typography variant="h6" className="padding-x-10">
            <Button
              className={`orangeOnHover ${selectedItem === "athiPen" ? "textUnderline" : "nav-btn"}`}
              disableRipple={true}
              focusRipple={false}
              onClick={this.athiPenClick}
            >
              AthiPen
            </Button>
          </Typography>
          <Typography variant="h6" className="padding-x-10">
            <Button
              className={`orangeOnHover ${selectedItem === "allProdukt" ? "textUnderline" : "nav-btn"}`}
              disableRipple={true}
              focusRipple={false}
              onClick={this.allProduktClick}
            >
              All products
            </Button>
          </Typography>
          <Typography variant="h6" className="padding-x-10">
            <Button
              className={`orangeOnHover ${selectedItem === "others" ? "textUnderline" : "nav-btn"}`}
              disableRipple={true}
              focusRipple={false}
              onClick={this.othersClick}
            >
              Others
            </Button>
          </Typography>
          <FontAwesomeIcon
            size="lg"
            icon={"shopping-cart"}
            color={Color.Dark}
            className="orangeOnHover"
          />
        </Toolbar>
      </AppBar>
    );
  }
}
