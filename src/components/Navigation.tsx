import fontawesome from "@fortawesome/fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Button, ListItemText, Menu, MenuItem, Toolbar, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Color } from "../Enum/Color";
import "../style/style.css";

fontawesome.library.add(faShoppingCart);

interface INavigationState {
  selectedItem: string
  anchorEl: any
  setAnchorEl: any
}

export class Navigation extends Component<{}, INavigationState> {

  public constructor(props, state: any) {
    super(props);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    this.state = {
      selectedItem: "",
      anchorEl: anchorEl,
      setAnchorEl: setAnchorEl
    }
  }

  public handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.state.setAnchorEl(event.currentTarget);
  };

  public handleClose = () => {
    this.state.setAnchorEl(null);
  };

  public athiPenClick = () => this.setState({ selectedItem: "athiPen" });
  public allProduktClick = () => this.setState({ selectedItem: "allProdukt" });
  public othersClick = () => this.setState({ selectedItem: "others" });

  public render(): React.ReactNode {
    const { selectedItem } = this.state;

    return (
      <AppBar position="static" className="bg-white">
        <Toolbar className="marginLeftAuto">
          <Typography variant="h6" className="padding-x-10">
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
                className={`orangeOnHover ${window.location.pathname === "/AllProducts" ? "textUnderline" : "nav-btn"}`}
                disableRipple={true}
                focusRipple={false}
                onClick={this.allProduktClick}
              >
                All products
            </Button>
            </a>
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