import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-scroll";
import { Color } from "../Enum/Color";
import "../style/main.scss";

interface IAthiPenState {
    firstColorClicked: boolean;
    secondColorClicked: boolean;
    player: any;
}


export class AthiPen extends Component<{}, IAthiPenState> {
    static displayName = AthiPen.name;

    public constructor(props, state: any) {
        super(props);

        this.state = {
            firstColorClicked: true,
            secondColorClicked: false,
            player: null
        }
    }

    public firstColorClicked = () => this.setState({ firstColorClicked: true, secondColorClicked: false });
    public secondColorClicked = () => this.setState({ firstColorClicked: false, secondColorClicked: true });

    public render(): React.ReactNode {
        const { firstColorClicked, secondColorClicked } = this.state;

        return (
            <div className="athiPen">
                <span className="athiPen_header">
                    <span>
                        <div>
                            <Typography variant="h2">The AthiPen</Typography>
                            <Typography variant="h3">The next generation of pens</Typography>
                            <span className="athiPen_header_colors">
                                <div className={`athiPen_header_colors_item athiPen_header_colors_item-first ${firstColorClicked ? 'selected' : ''}`} onClick={this.firstColorClicked}>
                                    <span>
                                        <div></div>
                                    </span>
                                </div>
                                <div className={`athiPen_header_colors_item athiPen_header_colors_item-second ${secondColorClicked ? 'selected' : ''}`} onClick={this.secondColorClicked}>
                                    <span>
                                        <div></div>
                                    </span>
                                </div>
                            </span>
                            <Button variant="contained" className="athiPen_header_button" startIcon={
                                <FontAwesomeIcon size="lg" icon={"shopping-cart"} color={Color.Dark} className="mb-1 mr-0 ml-1" />
                            }>Add to cart</Button>
                            <Link to="learn_more" className="athiPen_header_learn-more">Learn more</Link>
                        </div>
                        <img src={require("../assets/blue-pen.png")} alt="pen blue" className={`athiPen_header_img athiPen_header_img_${!firstColorClicked ? "disappeared" : ""}`} />
                        <img src={require("../assets/orange-pen.png")} alt="pen orange" className={`athiPen_header_img athiPen_header_img_${!secondColorClicked ? "disappeared" : ""}`} />
                    </span>
                    <div className="athiPen_header_show-more">
                        <Link
                            activeClass="link-noStyle"
                            to="ads"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <p>Show more</p>
                            <FontAwesomeIcon size="2x" icon={"angle-double-down"} color={Color.Dark} className="mb-1 mr-0 ml-1" />
                        </Link>
                    </div>
                </span>
                <span className="athiPen_ads" id="ads">
                    <Divider style={{ marginBottom: "1rem" }} />
                    <img src={require("../assets/Ad.png")} alt="Advertisement" className="athiPen_header_ad" />
                </span>
                <span className="athiPen_learnMore">
                    <Divider />
                    <Typography variant="h4" className="athiPen_learnMore_header">The AthiPen</Typography>
                    <div>
                        <Button variant="contained" className="athiPen_header_button" startIcon={
                            <FontAwesomeIcon size="lg" icon={"shopping-cart"} color={Color.Dark} className="mb-1 mr-0 ml-1" />
                        }>Add to cart</Button>
                    </div>
                    <div className="athiPen_learnMore_spec">
                        <div className="athiPen_learnMore_spec_flexItem">
                            <Typography variant="h6" className="athiPen_learnMore_spec_title">Specifications:</Typography>
                            <div className="athiPen_learnMore_specification">
                                <span>
                                    <FontAwesomeIcon size="lg" icon={"code-branch"} />
                                </span>
                                <b>Version:</b>
                                <p>AthiPen-XF0LK-60F v2.34</p>
                            </div>
                            <div className="athiPen_learnMore_specification">
                                <span>
                                    <FontAwesomeIcon size="lg" icon={"cubes"} />
                                </span>
                                <b>Material:</b>
                                <p>silver / platin</p>
                            </div>
                            <div className="athiPen_learnMore_specification">
                                <span>
                                    <FontAwesomeIcon size="lg" icon={"th"} />
                                </span>
                                <b>Grip Material:</b>
                                <p>rubber</p>
                            </div>
                            <div className="athiPen_learnMore_specification">
                                <span>
                                    <FontAwesomeIcon size="lg" icon={"pencil-alt"} />
                                </span>
                                <b>Tip Size:</b>
                                <p>0.7mm</p>
                            </div>
                            <div className="athiPen_learnMore_specification">
                                <span>
                                    <FontAwesomeIcon size="lg" icon={"ruler"} />
                                </span>
                                <b>Length:</b>
                                <p>13.8cm / 5.4 inches</p>
                            </div>
                            <div className="athiPen_learnMore_specification">
                                <span>
                                    <FontAwesomeIcon size="lg" icon={"weight"} />
                                </span>
                                <b>Weight:</b>
                                <p>18grams / 0.64oz</p>
                            </div>
                            <div className="athiPen_learnMore_specification">
                                <span>
                                    <FontAwesomeIcon size="lg" icon={"tree"} />
                                </span>
                                <b>Climate friendly:</b>
                                <p>yes</p>
                            </div>
                        </div>
                        <div className="athiPen_learnMore_spec_flexItem">
                            <video
                                id="my-video"
                                className="video-js"
                                controls
                                preload="auto"
                                width="640"
                                height="264"
                                data-setup="{}"
                            >
                                <source src={require("../assets/video.webm")} type="video/webm" />
                                <p className="vjs-no-js">
                                    To view this video please enable JavaScript, and consider upgrading to a
                                    web browser that
                                     <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noopener noreferrer">supports HTML5 video</a>
                                </p>
                            </video>
                        </div>
                    </div>

                </span>
            </div>
        );
    }
}
