import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation";
import { AthiPen } from "./AthiPen";
import { Contact } from "./Contact";

export class OurStory extends Component {
    static displayName = OurStory.name;

    public render(): React.ReactNode {
        return (
            <div>
                Our story
            </div>
        );
    }
}
