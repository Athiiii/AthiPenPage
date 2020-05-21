import React, { Component } from "react";
import { Navigation } from "./Navigation";

export class Home extends Component {
  static displayName = Home.name;

  public render(): React.ReactNode {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
