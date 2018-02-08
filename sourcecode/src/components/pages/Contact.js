import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Contact extends Component {
    render() {
       
        return (
            <div className="contact">
                <Row>
                    <Col s={12} m={12} l={12}>
                        <h1>Contact me</h1>
                    </Col>
                </Row>

                <Row>
                    <Col s={1} m={12} l={12}>
                        <i className="fa fa-envelope" aria-hidden="true"></i> gota.sound@gmail.com
                    </Col>
                </Row>

                 <Row>
                    <Col s={1} m={12} l={12}>
                      <p className="flow-text"><i className="fa fa-phone"></i> +32495771827</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;
