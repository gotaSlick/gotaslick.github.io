// gulp and npm start. port 3000

import React, { Component } from 'react';
import {Row, Col} from 'react-materialize'

let logo = "./img/logoGota.png"

class Header extends Component {
    render() {
        return (
            <Row>
                <Col s={12} m={12} l={12} className="header">
                <header>   
                    <div>
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                    <div className="titles">
                    <h2>Brussels based Full-Stack Web Developer</h2>
                    <h1>Gota Slick</h1>
                    <h3>Portfolio</h3>
                    </div>
                </header>
                </Col>
                </Row>
        );
    }
}

export default Header;
