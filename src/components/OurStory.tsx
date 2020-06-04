import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../style/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color } from "../Enum/Color";
import { faPen, faMoneyBill, faMedal, faBuilding, faCrop, faTag, faUsers, faFlag, faPenAlt, faTrophy, faViruses } from "@fortawesome/free-solid-svg-icons";
import { Typography, Divider } from "@material-ui/core";

export class OurStory extends Component {
    static displayName = OurStory.name;

    public render(): React.ReactNode {
        return (
            <div>
                <div className="ourStory">
                    <Typography variant="h3" >Our Story</Typography>
                    <p className="ourStory_text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem blanditiis soluta recusandae sed dolorum placeat illo modi dolor rerum natus. Perspiciatis quod ut minus iste! Obcaecati nemo accusamus cupiditate atque.
                        Animi nisi itaque accusamus earum facilis magnam asperiores. Consectetur, iure, aliquid aut quidem eveniet maiores quia quisquam, illo maxime alias ipsum delectus consequatur possimus hic! In ducimus impedit sequi molestiae.
                        Laborum itaque maiores quas distinctio commodi neque voluptate est in debitis, perspiciatis architecto deserunt ipsum quia ipsa! Non, laudantium. Perferendis, pariatur architecto quisquam ex aliquid dicta hic qui tempore alias!
                        Repudiandae, labore? Illum molestias maiores qui nemo suscipit ea. Quidem fugit similique, aperiam nulla quas asperiores commodi iusto minus incidunt minima obcaecati tenetur harum beatae eligendi provident, alias soluta consectetur!
                        Sit rem placeat eos voluptatibus iure harum voluptates optio, modi aut quasi fugit quos molestiae magnam hic aspernatur, temporibus commodi voluptatum, aliquid at doloremque eius veritatis reprehenderit consectetur eveniet. Ea?
                        Sequi tenetur deleniti nihil, rerum aliquid delectus magni nisi veritatis aut suscipit sunt earum atque, cupiditate porro voluptates amet ex est numquam possimus! Vel expedita perspiciatis sit blanditiis veritatis? Soluta!
                        Nam culpa cumque praesentium, dicta labore obcaecati officia cupiditate alias id beatae libero quae rem commodi eaque quis, reiciendis iusto animi corporis illum neque impedit! Eveniet necessitatibus qui perferendis similique.
                        Ducimus natus, expedita dolores, asperiores eligendi nam exercitationem excepturi saepe tempore debitis fugiat officiis, quam eum molestiae. Maiores ipsum perspiciatis blanditiis, iusto, id odit perferendis quod illum ut ipsam saepe.
                        Ducimus dolore tenetur debitis nemo veniam nam omnis ea accusamus amet sit. Tempore ipsum ut beatae, consequuntur commodi quos aperiam perferendis, velit, rerum quaerat ullam deleniti saepe eos laudantium iste?
                        Aspernatur nostrum deserunt quibusdam repudiandae sapiente natus quaerat ea. Praesentium quis vel doloremque sunt. Ipsa sed illo enim obcaecati! Dolorem, inventore natus unde officiis temporibus sed modi minima quis! Reiciendis.
                    </p>
                    <Divider />
                    <Typography variant="h4" >The timeline</Typography>

                </div>
                <VerticalTimeline className="timeline">
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faFlag} color={Color.Dark} />}
                        date="2018 - current"
                    />
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="April 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faBuilding} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">Founding</h3>
                        <h4 className="vertical-timeline-element-subtitle">of AthiPen Company</h4>
                        <p>The company AthiPen AG was founded by Athavan Theivakulasingham.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f38221', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #f38221' }}
                        date="June 2018"
                        iconStyle={{ background: '#f38221', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faCrop} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">Hiring employees</h3>
                        <h4 className="vertical-timeline-element-subtitle">Pen-specialists</h4>
                        <p>The company started hiring 2 top pen-specialists to perfect our products.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="November 2018"
                        contentStyle={{ background: '#67e00c', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #67e00c' }}
                        iconStyle={{ background: '#67e00c', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faPen} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">First version</h3>
                        <h4 className="vertical-timeline-element-subtitle">of AthiPen</h4>
                        <p>Finally after 6 month, we were able to annouce the first version of our product: The AthiPen</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="February 2019"
                        contentArrowStyle={{ borderRight: '7px solid  #ff2121' }}
                        contentStyle={{ background: '#ff2121', color: '#fff' }}
                        iconStyle={{ background: '#ff2121', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faTag} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">Sold 10'000 pieces</h3>
                        <h4 className="vertical-timeline-element-subtitle">of AthiPen</h4>
                        <p>The hard work was worth it. With our first product, we were able to get off to a very good start and sell over 10,000 pieces</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        contentArrowStyle={{ borderRight: '7px solid  #daca10' }}
                        contentStyle={{ background: '#daca10', color: '#fff' }}
                        iconStyle={{ background: '#daca10', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faMedal} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">First nomination</h3>
                        <h4 className="vertical-timeline-element-subtitle">as best upcoming pen-seller</h4>
                        <p>Our hard work was appreciated through a nomination as best upcoming pen-seller. We were able to attain the first place!</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="July 2019"
                        contentArrowStyle={{ borderRight: '7px solid  #159292' }}
                        contentStyle={{ background: '#159292', color: '#fff' }}
                        iconStyle={{ background: '#159292', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faUsers} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">Reaching 150</h3>
                        <h4 className="vertical-timeline-element-subtitle">employees</h4>
                        <p>The company is slowly growing. After 1.5 years of hard work, we have grown into a small family with 150 people!</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="October 2019"
                        contentArrowStyle={{ borderRight: '7px solid  #963dda' }}
                        contentStyle={{ background: '#963dda', color: '#fff' }}
                        iconStyle={{ background: '#963dda', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faPenAlt} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">AthiPen Pro</h3>
                        <h4 className="vertical-timeline-element-subtitle">was annouced</h4>
                        <p>With the help of our customers, we were able to fix our mistakes and create an even better pen</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="January 2020"
                        contentArrowStyle={{ borderRight: '7px solid  #59d23b' }}
                        contentStyle={{ background: '#59d23b', color: '#fff' }}
                        iconStyle={{ background: '#59d23b', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faTrophy} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">Leading pen-seller</h3>
                        <h4 className="vertical-timeline-element-subtitle">worldwide</h4>
                        <p>Through AthiPen Pro we are able to dominate the pen market and overtake SevisStift Inc., Umat-StiftProdukt Gmbh and Schaad-Stabilo AG</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2020"
                        contentArrowStyle={{ borderRight: '7px solid  #ffb819' }}
                        contentStyle={{ background: '#ffb819', color: '#fff' }}
                        iconStyle={{ background: '#ffb819', color: '#fff' }}
                        icon={<FontAwesomeIcon size="lg" icon={faViruses} color={Color.Dark} />}
                    >
                        <h3 className="vertical-timeline-element-title">The fight against</h3>
                        <h4 className="vertical-timeline-element-subtitle">Coronavirus</h4>
                        <p>The Covid-19 pandemie also affects us. But through our quick switch to home office and the turn off of our fabrics, we were able to protect our employees. We are fully armed against the virus.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    }
}
