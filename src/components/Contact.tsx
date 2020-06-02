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
                        <span className="contact_header">
                            <h3 className="contact_header_first">Don't be a stranger</h3>
                            <h3 className="contact_header_second">just say hello</h3>
                        </span>
                    </Grid>
                    <Grid item xs={6}>
                        asdfasdf
                    </Grid>
                </Grid>
            </div>
        );
    }
}
