import { Divider, Button } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-scroll";
import "../style/main.scss";

export class Footer extends Component {

    public render(): React.ReactNode {
        return (
            <div className="footer_parent">
                <footer className="footer">
                    <div className="footer_column">
                        <b>AthiPen</b>
                        <Divider />
                        <p>AthiPen is an upcoming company, which are willing to revolutionize the pen industrie.</p>
                    </div>
                    <div className="footer_column">
                        <b>Quick Links</b>
                        <Divider />
                        <span className="footer_column-list">
                        <Link to="learn_more" className="footer_link">Get started</Link>
                        <Link to="learn_more" className="footer_link">Top Leaders</Link>
                        <Link to="learn_more" className="footer_link">Tickets</Link>
                        <Link to="learn_more" className="footer_link">Lifestyle</Link>
                        <Link to="learn_more" className="footer_link">About</Link>
                        </span>
                    </div>
                    <div className="footer_column">
                        <b>Newsletter</b>
                        <Divider />
                        <p>Subscribe to our newsletter to receive the newest updates about our products.</p>
                        <Button variant="contained" className="footer_column_btn">Subscribe</Button>
                    </div>
                    <div className="footer_column">
                        <b>Contact us</b>
                        <Divider />
                        <p>We are always reachable for you.</p>
                        <Button variant="outlined" className="footer_column_btn">Contact us</Button>
                    </div>
                </footer>
                <p className="footer_copyright">Copyright AthiPen AG &copy; 2020. All rights reserved</p>
            </div>
        );
    }
}
