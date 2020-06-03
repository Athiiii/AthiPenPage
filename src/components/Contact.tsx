import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FormControl, Grid, Input, InputAdornment, InputLabel } from "@material-ui/core";
import React, { Component } from "react";
import { Color } from "../Enum/Color";
import "../style/main.scss";

export class Contact extends Component {
    static displayName = Contact.name;

    public render(): React.ReactNode {
        return (
            <div>
                <Grid container spacing={3} className="pa-3 contact">
                    <Grid item xs={6}>
                        <span className="contact_header">
                            <h3 className="contact_header_first">Don't be a stranger</h3>
                            <h3 className="contact_header_second">just say hello</h3>

                            <span className="contact_header_text">Feel free to get in touch with us. We are always optn to discuss new projects, creative ideas or opportunities to be part of your visions.</span>
                            <span className="contact_header_help">Need help?</span>
                            <a href="mailto:contact_us@athipen.com" className="contact_header_mail_phone">contact_us@athipen.com</a>
                            <span className="contact_header_help">Feel like to rather talk?</span>
                            <a href="tel:+41 79 123 456 78" className="contact_header_mail_phone">+41 79 123 456 78</a>

                        </span>
                    </Grid>
                    <Grid item xs={6} className="contact_form">
                        <FormControl className="contact_input_form">
                            <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                className="contact_input"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon size="lg" icon={"user-alt"} color={Color.Dark} className="navigation_icon mb-1" />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className="contact_input_form">
                            <InputLabel htmlFor="input-with-icon-adornment">E-Mail</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                className="contact_input"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon size="lg" icon={"envelope"} color={Color.Dark} className="navigation_icon mb-1" />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className="contact_input_form">
                            <InputLabel htmlFor="input-with-icon-adornment">Phone</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                className="contact_input"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon size="lg" icon={"phone"} color={Color.Dark} className="navigation_icon mb-1" />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className="contact_input_form">
                            <InputLabel htmlFor="input-with-icon-adornment">Message</InputLabel>
                            <Input
                                multiline
                                rows={5}
                                id="input-with-icon-adornment"
                                className="contact_input"
                                style={{ alignItems: 'baseline' }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon size="lg" icon={"quote-right"} color={Color.Dark} className="navigation_icon mb-1" />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div>
                            <Button
                                variant="outlined"
                                className="contact_sendButton"
                                endIcon={<FontAwesomeIcon size="lg" icon={"paper-plane"} color={Color.Dark} className="navigation_icon mb-1" />}
                            >
                                Send over
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
