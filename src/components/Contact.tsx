import React, { Component } from "react";
import "../style/main.scss";
import { Grid } from "@material-ui/core";

export class Contact extends Component {
    static displayName = Contact.name;

    public render(): React.ReactNode {
        return (
            <div>
                <Grid container spacing={3} className="pa-3">
                    <Grid item xs={6}>
                        asdfasdf
                    </Grid>
                    <Grid item xs={6}>
                        asdfasdf
                    </Grid>
                </Grid>
            </div>
        );
    }
}
