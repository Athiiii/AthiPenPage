import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation";
import { AthiPen } from "./AthiPen";

export class Contact extends Component {
    static displayName = Contact.name;

    public render(): React.ReactNode {
        return (
            <div>
                Contact
            </div>
        );
    }
}
