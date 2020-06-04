import React, { Component } from "react";
import "../style/main.scss";
import { Typography, Button, Link } from "@material-ui/core";
import { Color } from "../Enum/Color";

interface IAthiPenState {
    firstColorClicked: boolean;
    secondColorClicked: boolean;
}


export class AthiPen extends Component<{}, IAthiPenState> {
    static displayName = AthiPen.name;

    public constructor(props, state: any) {
        super(props);

        this.state = {
            firstColorClicked: true,
            secondColorClicked: false
        }
    }

    public firstColorClicked = () => this.setState({ firstColorClicked: true, secondColorClicked: false });
    public secondColorClicked = () => this.setState({ firstColorClicked: false, secondColorClicked: true });

    public render(): React.ReactNode {
        const { firstColorClicked, secondColorClicked } = this.state;

        return (
            <div className="athiPen">
                <span className="athiPen_header">
                    <Typography variant="h3">The AthiPen</Typography>
                    <Typography variant="h4">The next generation of pens</Typography>
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
                    <Button variant="contained" className="athiPen_header_button">Add to cart</Button>
                    <Link href="#learn_more" className="athiPen_header_learn-more">Learn more</Link>

                </span>
            </div>
        );
    }
}
