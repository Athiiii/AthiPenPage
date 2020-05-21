import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation";

export class AllProducts extends Component {
    static displayName = AllProducts.name;

    public render(): React.ReactNode {
        return (
            <div>
                AllProducts
            </div>
        );
    }
}
