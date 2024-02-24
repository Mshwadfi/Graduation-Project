import React from 'react';
import { hero_img } from '../utils/constants';
import { person_1, person_2, person_3, person_4, person_5, person_6, person_7, person_8 } from '../utils/constants';

const AboutUs = () => {
    return (
        <div>
            <div className="about-us container" id="aboutus">
                <div className="about-us-header">
                    <div className="about-us-header-img">
                        <img src={hero_img} alt="Company Logo"/>
                    </div>
                    <div className="about-us-header-text">
                        <h3>Who we are?</h3>
                        <p>Founded in 2023, Acadmix is an online learning platform that allows students to learn at their own pace, test themselves, and get ahead with our expert tutors anytime and anywhere. By offering short, engaging video lessons, visualized learning journeys, continuous assessment, and performance analytics, we are changing the way students learn outside the classroom.</p>
                    </div>
                </div>
                <div className="about-us-header phone">
                    <h2>about us</h2>
                    <p>Founded in 2023, Acadmix is an online learning platform that allows students to learn at their own pace, test themselves, and get ahead with our expert tutors anytime and anywhere. By offering short, engaging video lessons, visualized learning journeys, continuous assessment, and performance analytics, we are changing the way students learn outside the classroom.</p>
                </div>
                <div className="team-content">
                    <div className="team-header">Our Team</div>
                    <div className="team">
                        <div className="person">
                            <div className="person-img">
                                <img src={person_5} alt=""/>
                            </div>
                            <div className="person-text">
                                <h3>Mahmoud Youssef</h3>
                                <p>Role: UI UX Designer.</p>
                            </div>
                        </div>
                        <div className="person">
                            <div className="person-img">
                                <img src={person_8} alt=""/>
                            </div>
                            <div className="person-text">
                                <h3>Mohamed Magdy</h3>
                                <p>Role: Front-end Developer.</p>
                            </div>
                        </div>
                       
                        <div class="person">
                        <div class="person-img">
                            <img src={person_7} alt=""/>
                        </div>
                        <div class="person-text">
                            <h3>Mohamed Farag</h3>
                            <p>Role: Back-end Developer.</p>
                        </div>
                        </div>
                        <div class="person">
                        <div class="person-img">
                            <img src={person_3} alt=""/>
                        </div>
                        <div class="person-text">
                            <h3>Ahmed Abdelwahd</h3>
                            <p>Role: Back-end Developer.</p>
                        </div>
                        </div>
                        <div class="person">
                        <div class="person-img">
                            <img src={person_2} alt=""/>
                        </div>
                        <div class="person-text">
                            <h3>Abdhullh Eldsoky</h3>
                            <p>Role: UI UX Designer.</p>
                        </div>
                        </div>
                        <div class="person">
                        <div class="person-img">
                            <img src={person_6} alt="" />
                        </div>
                        <div class="person-text">
                            <h3>Mohamed Abdelmonim</h3>
                            <p>Role: Back-end Developer.</p>
                        </div>
                        </div>
                        <div class="person">
                        <div class="person-img">
                            <img src={person_4} alt="" />
                        </div>
                        <div class="person-text">
                            <h3>Mahmoud Abdelhamid</h3>
                            <p>Role: Penetration Tester.</p>
                        </div>
                        </div>
                        <div className="person">
                            <div className="person-img">
                                <img src={person_1} alt=""/>
                            </div>
                            <div className="person-text">
                                <h3>Mohamed Elswadfy</h3>
                                <p>Role: Front-end Developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
