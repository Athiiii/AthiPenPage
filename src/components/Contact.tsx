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

                            <span className="contact_header_text">Feel free to get in touch with us. We are always optn to discuss new projects, creative ideas or opportunities to be part of your visions.</span>
                            <span className="contact_header_help">Need help?</span>    
                            <a href="mailto:contact_us@athipen.com" className="contact_header_mail">contact_us@athipen.com</a>
                            <span className="contact_header_help">Feel like to rather talk?</span>    
                            <p className="contact_header_phone">+41 79 123 456 78</p>

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
