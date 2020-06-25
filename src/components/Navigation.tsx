import fontawesome from "@fortawesome/fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
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

interface INavigationProps {
  location: { pathname: string }
}

export class Navigation extends Component<INavigationProps, INavigationState> {

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
    const { location } = this.props;

    var selectedPageTemp = "";

    return (
      <AppBar position="static" className="navigation">
        <Toolbar className="ml-auto navigation__toolbar pt-1 pr-1 pl-2">
          <Link to="/" onClick={this.setAthiPenPage}>
            <h6 className="navigation__link">
              <div
                className={`navigation__link_href navLinkAnimation navLinkAnimation${selectedPageTemp === 'AthiPen' || (location.pathname.split('/')[1] || '/') === '/' ? '_focused' : ''}`}
              >
                <span>AthiPen</span>
              </div>
            </h6>
          </Link>
          <Link to="/AllProducts" onClick={this.setAllProductsPage}>
            <h6 className="navigation__link">
              <div className={`navigation__link_href navLinkAnimation navLinkAnimation${selectedPageTemp === 'AllProducts' || (location.pathname.split('/')[1] || '/') === 'AllProducts' ? '_focused' : ''}`}>
                <span>All Products</span>
              </div>
            </h6>
          </Link>
          <h6 className="navigation__link" aria-controls="others-menu" aria-haspopup="true">
            <div
              className={`pointer navigation__link_href navLinkAnimation navLinkAnimation${othersClick || selectedPageTemp === 'ContactUs' || selectedPageTemp === 'OurStory'
              || (location.pathname.split('/')[1] || '/') === 'OurStory' || (location.pathname.split('/')[1] || '/') === 'Contact' ? '_focused' : ''}`}
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
              <MenuItem onClick={this.setOurStoryPage} className={`navigation__menu_item navigation__menu_item_${selectedPageTemp === 'OurStory' ? 'selected' : ''}`} ><Link to="/OurStory">Our Story</Link></MenuItem>
              <MenuItem onClick={this.setContactsPage} className={`navigation__menu_item navigation__menu_item_${selectedPageTemp === 'ContactUs' ? 'selected' : ''}`}><Link to="/Contact">Contact us</Link></MenuItem>
            </Menu>
          </h6>
          <Typography variant="h6">
          <FontAwesomeIcon size="lg" icon={"shopping-cart"} color={Color.Dark} className="navigation_icon mb-1" />
          </Typography>
        </Toolbar>
      </AppBar >
    );
  }
}