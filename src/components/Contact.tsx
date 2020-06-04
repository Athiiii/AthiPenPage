import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FormControl, Grid, Input, InputAdornment, InputLabel } from "@material-ui/core";
import React, { Component, ChangeEvent, ChangeEventHandler } from "react";
import { Color } from "../Enum/Color";
import "../style/main.scss";
import { Alert } from '@material-ui/lab';

interface IContactState {
    show: boolean,
    name: boolean,
    email: boolean,
    message: boolean,
    nameValue: string | null,
    emailValue: string | null,
    messageValue: string | null
}

export class Contact extends Component<{}, IContactState> {
    static displayName = Contact.name;

    public constructor(props, state: any) {
        super(props);

        this.state = {
            show: false,
            email: true,
            message: true,
            name: true,
            emailValue: "",
            messageValue: "",
            nameValue: ""
        }
    }

    public submit = (): void => {
        const { messageValue, nameValue, emailValue } = this.state;

        var email = true;
        var message = true;
        var name = true;

        message = messageValue !== null && messageValue !== "";
        email = emailValue !== null && emailValue !== "";
        name = nameValue !== null && nameValue !== "";

        if (email && message && name) {
            this.setState({ show: true })
        } else {
            this.setState({ email, message, name });
        }

    }

    public nameChange = (nameValueEvent: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => this.setState({ nameValue: nameValueEvent.target.value, name: true });
    public messageChange = (messageValueEvent: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => this.setState({ messageValue: messageValueEvent.target.value, message: true });
    public emailChange = (emailValueEvent: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => this.setState({ emailValue: emailValueEvent.target.value, email: true });

    public render(): React.ReactNode {
        const { show, name, message, email, nameValue, messageValue, emailValue } = this.state;

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
                        <FormControl className={`contact_input${name ? '_form' : '_error'}`}>
                            <InputLabel htmlFor="input-with-icon-adornment">Name*</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                className="contact_input"
                                onChange={this.nameChange}
                                value={nameValue}
                                error={!name}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon size="lg" icon={"user-alt"} color={Color.Dark} className="navigation_icon mb-1" />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={`contact_input${email ? '_form' : '_error'}`}>
                            <InputLabel htmlFor="input-with-icon-adornment">E-Mail*</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                className="contact_input"
                                onChange={this.emailChange}
                                value={emailValue}
                                error={!email}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon size="lg" icon={"envelope"} color={Color.Dark} className="navigation_icon mb-1" />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={`contact_input_form`}>
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
                        <FormControl className={`contact_input${message ? '_form' : '_error'}`}>
                            <InputLabel htmlFor="input-with-icon-adornment">Message*</InputLabel>
                            <Input
                                multiline
                                rows={5}
                                error={!message}
                                onChange={this.messageChange}
                                value={messageValue}                              
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
                                onClick={this.submit}
                            >
                                Send over
                        </Button>
                            <Alert severity="success" className={`contact_alert contact_alert_${show ? 'show' : ''}`}>Thank you for your message. We'll react out to you as fast as possible.</Alert>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
