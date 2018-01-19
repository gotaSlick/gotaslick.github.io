import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <Row>
            <Col s={12} m={12} l={12}>
            <nav>
                <ul>
                    <li><Link to="/contact">Contact</Link></li>                   
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/">About Me</Link></li>                    
                </ul>
            </nav>
            </Col>
            </Row>
        )
    }
}

export default NavBar;
