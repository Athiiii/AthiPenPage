import React, { Component } from "react";
import "../style/main.scss";
import { Typography, Button } from "@material-ui/core";

export class AllProducts extends Component {
    static displayName = AllProducts.name;

    public render(): React.ReactNode {
        return (
            <div className="allrproducts">
                <Typography variant="h4" >Our Products</Typography>
                <div className="products">
                <span className="product">
                        <img src={require("../assets/product1-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">Pen infinity</p>
                            <p className="product_price">105.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product2-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">Golden pen</p>
                            <p className="product_price">120.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product3-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">Circle pen</p>
                            <p className="product_price">190.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product4-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">flat booklet pen</p>
                            <p className="product_price">80.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product5-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">modern circle pen</p>
                            <p className="product_price">220.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>

                    <span className="product">
                        <img src={require("../assets/product6-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">note pen</p>
                            <p className="product_price">115.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product7-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">palm pen</p>
                            <p className="product_price">65.50 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product8-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">la pen</p>
                            <p className="product_price">390.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product9-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">sharpening pen</p>
                            <p className="product_price">485.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product10-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">plate pen</p>
                            <p className="product_price">250.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                    <span className="product">
                        <img src={require("../assets/product11-min.jpg")} alt="Product" />
                        <div className="product_description">
                            <p className="product_title">smooth pen</p>
                            <p className="product_price">170.00 CHF</p>
                        </div>
                        <Button className="product_btn" variant="contained">Add to cart</Button>
                    </span>
                </div>
            </div>
        );
    }
}
