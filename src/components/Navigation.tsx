import fontawesome from "@fortawesome/fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Menu, MenuItem, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Color } from "../Enum/Color";
import "../style/main.scss";

fontawesome.library.add(faShoppingCart);

interface INavigationState {
  selectedPage: string;
  anchorEl: any;
  othersClick: boolean;
}

export class Navigation extends Component<{}, INavigationState> {

  public constructor(props, state: any) {
    super(props);

    this.state = {
      selectedPage: "",
      anchorEl: null,
      othersClick: false
    }
  }

  public setAthiPenPage = () => this.setState({ selectedPage: "AthiPen" });
  public setAllProductsPage = () => this.setState({ selectedPage: "AllProducts" });
  public setContactsPage = () => this.setState({ selectedPage: "ContactUs" }, () => this.handleClose());
  public setOurStoryPage = () => this.setState({ selectedPage: "OurStory" }, () => this.handleClose()); 



  public handleClick = (event: any): void => this.setState({ anchorEl: event.currentTarget, othersClick: true })
  public handleClose = (): void => this.setState({ anchorEl: null, othersClick: false })


  public render(): React.ReactNode {
    const { selectedPage, anchorEl, othersClick } = this.state;

    return (
      <AppBar position="static" className="navigation">
        <Toolbar className="ml-auto navigation__toolbar">
          <Link to="/" onClick={this.setAthiPenPage}>
            <h6 className="navigation__link">
              <div
                className={`navigation__link_href navLinkAnimation navLinkAnimation${selectedPage === 'AthiPen' ? '_focused' : ''}`}
              >
                <span>AthiPen</span>
              </div>
            </h6>
          </Link>
          <Link to="/AllProducts" onClick={this.setAllProductsPage}>
            <h6 className="navigation__link">
              <div className={`navigation__link_href navLinkAnimation navLinkAnimation${selectedPage === 'AllProducts' ? '_focused' : ''}`}>
                <span>All Products</span>
              </div>
            </h6>
          </Link>
          <h6 className="navigation__link" aria-controls="others-menu" aria-haspopup="true">
            <div
              className={`pointer navigation__link_href navLinkAnimation navLinkAnimation${othersClick || selectedPage == 'ContactUs' || selectedPage == 'OurStory'
                ? '_focused' : ''}`}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <span>Others</span>
            </div>
            <Menu
              id="others-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              className="mt-5"
            >
              <MenuItem onClick={this.setOurStoryPage} className={`navigation__menu_item navigation__menu_item_${selectedPage === 'OurStory' ? 'selected' : ''}`} ><Link to="/OurStory">Our Story</Link></MenuItem>
              <MenuItem onClick={this.setContactsPage} className={`navigation__menu_item navigation__menu_item_${selectedPage === 'ContactUs' ? 'selected' : ''}`}><Link to="/Contact">Contact us</Link></MenuItem>
            </Menu>

          </h6>
          <h6 className="ml-1">
            <FontAwesomeIcon size="lg" icon={"shopping-cart"} color={Color.Dark} className="navigation_icon" />
          </h6>
        </Toolbar>
      </AppBar >
    );
  }
}