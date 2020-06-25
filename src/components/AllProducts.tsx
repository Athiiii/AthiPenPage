import React, { Component } from "react";
import "../style/main.scss";

export class AllProducts extends Component {
    static displayName = AllProducts.name;

    public render(): React.ReactNode {
        return (
            <div>
                <p style={{height: "85vh"}}>All products</p>
            </div>
        );
    }
}
