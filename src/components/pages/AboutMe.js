import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import {Link} from 'react-router-dom';

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutMe">
                <Row>
                    <Col s={12} m={12} l={12}>
                        <h1>Some words about me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={6} l={6}>
                        <p>Hi! I am Gota, a junior JavaScript developer. After 7 years of experience as a sound engineer and a music producer in advertising, cinema and music performance, I decided to dive into the wide, exciting and ceaselessly evolving world of web development. </p>
                        <p>I live in Brussels where I recently accomplished an intensive 3 months program at the Elium Academy Bootcamp. Today I am a full-stack JavaScript intern at Keyrock.eu, a startup which is part of the Start it @KBC incubator in Brussels.</p>
                        <p>Being a lifelong learner, I am not afraid of starting over. I like to change my angle of vision every once in a while. This leads me to like challenges. Before plunging into the web developer career, I looked carefully into it and among</p>                 
                    </Col>
                    <Col s={12} m={6} l={6}> 
                        <p>other things that came out on top of the others were: never stop learning and place for creativity. It came out very true! I love spending countless hours educating myself outside the realm of academia, I love the challenge of being obliged to change my methods of work as technology evolves. I do not mind not being in a comfort zone and most of all I take all the opportunities to learn new things or at least read about them.</p>
                        <p>P.S. I continue being a music producer in my spare time. You can check my work by clicking the ‘music’ link.</p>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12} l={12}>
                    <Link to="/projects"><h1>Projects</h1></Link>
                        <Link className="link" to="/projects">Here</Link> you can see some of my web projects.
                        Click on Demo to see the live demo of the application. There are also links to my GitHub codes indicated also
                        Link to the code.
                    </Col>
                </Row>
                

            <div className="contact">
                <Row>
                    <Col s={12} m={12} l={12}>
                        <h1>Contact me</h1>
                    </Col>
                </Row>

                <Row>
                    <Col s={1} m={12} l={12}>
                        gota.sound@gmail.com
                    </Col>
                </Row>
            </div>

            </div>
        );
    }
}

export default AboutMe;
