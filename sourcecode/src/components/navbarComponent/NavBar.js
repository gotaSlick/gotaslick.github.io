import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <Row>
                <Col s={12} m={12} l={12}>
                    <nav>
                        <React.Fragment>
                            <li><Link to="/contact" className="flow-text">Contact</Link></li>
                            <li><Link to="/projects" className="flow-text">Projects</Link></li>
                            <li><Link to="/" className="flow-text">About Me</Link></li>
                        </React.Fragment>
                    </nav>
                </Col>
            </Row>
        )
    }
}

export default NavBar;
