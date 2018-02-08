import React, { Component } from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize';
import ReactTooltip from 'react-tooltip';


let todolistCard = "./img/projects/todolist.png"
let calcCard = "./img/projects/calc.png"
let studentappCard = "./img/projects/studentapp.png"
let blogCard = "./img/projects/blog.png"
let utubeCard = "./img/projects/utube.png"
let booksCard = "./img/projects/books.png"
let forecastCard = "./img/projects/forecast.png"

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <Row>
                    <Col s={12} m={12} l={12}>
                        <h1>Projects</h1>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12} l={12}>
                    <div className="flow-text">
                        <p>Here you can see some of my web projects.</p> <a className="importantNote" data-tip data-for="global"><i class="fa fa-exclamation-circle"></i> Important note </a> <ReactTooltip id='global' aria-haspopup='true' role='example'>
                        <p>For some visitors the first two Demo links (Todo List and Calculator) won't open on Chrome and Firefox</p>
                        <p>There is a strange bug with React and GitHub Pages</p>
                        <p>I am sorting it out</p>
                        <p>If you don't mind using Safari or just checking the link to the code on GitHub</p>
                        </ReactTooltip>
                        <p>Click on Demo to see the live demo of the application.</p>
                        <p>Link to the code links to the project's code on my <a href="https://github.com/gotaSlick" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i> Github account <i class="fa fa-github"></i></a></p>
                    </div>
                    </Col>
                </Row>
                <Row className="cardsSection">
                    <Col s={12} m={6} l={4}>
                        <Card className="smallCard" 
                              header={<a href="https://gotaslick.github.io/Todo-List/" target="_blank" rel="noopener noreferrer"><CardTitle image={todolistCard}></CardTitle></a>} 
                              actions={[<a href='https://gotaslick.github.io/Todo-List/' target="_blank" rel="noopener noreferrer">Demo</a>]}>
                            <div className="cardText">
                            A simple <a href="https://gotaslick.github.io/Todo-List/" target="_blank" rel="noopener noreferrer">Todo List</a> App<br/>
                            <a href="https://github.com/gotaSlick/Todo-List" target="_blank" rel="noopener noreferrer">Link to the code</a>
                            </div>
                        </Card>
                     </Col>
                     
                     <Col s={12} m={6} l={4}>
                        <Card className="smallCard" 
                            header={<a href="https://gotaslick.github.io/Calculator-Simple-App/" target="_blank" rel="noopener noreferrer"><CardTitle image={calcCard}></CardTitle></a>} 
                            actions={[<a href='https://gotaslick.github.io/Calculator-Simple-App/' target="_blank" rel="noopener noreferrer">Demo</a>]}>
                            <div className="cardText">
                            A simple <a href="https://gotaslick.github.io/Calculator-Simple-App/" target="_blank" rel="noopener noreferrer">Calculator</a><br/>
                           <a href="https://github.com/gotaSlick/Calculator-Simple-App" target="_blank" rel="noopener noreferrer">Link to the code</a>
                           </div>
                        </Card>
                     </Col>

                    <Col s={12} m={6} l={4}>
                        <Card className="smallCard" 
                              header={<a href="https://gentle-shore-14072.herokuapp.com/students" target="_blank" rel="noopener noreferrer"><CardTitle image={studentappCard}></CardTitle></a>} 
                              actions={[<a href='https://gentle-shore-14072.herokuapp.com/students' target="_blank" rel="noopener noreferrer">Demo</a>]}>
                            <div className="cardText">
                            A CRUD <a href="https://gentle-shore-14072.herokuapp.com/students" target="_blank" rel="noopener noreferrer">Student</a> App<br/>
                            <a href="https://github.com/gotaSlick/Student-App" target="_blank" rel="noopener noreferrer">Link to the code</a>
                            </div>
                        </Card>
                     </Col>
                     
                     <Col s={12} m={6} l={4}>
                        <Card className="smallCard" 
                            header={<a href="https://sheltered-peak-51983.herokuapp.com/blogs" target="_blank" rel="noopener noreferrer"><CardTitle image={blogCard}></CardTitle></a>} 
                            actions={[<a href='https://sheltered-peak-51983.herokuapp.com/blogs' target="_blank" rel="noopener noreferrer">Demo</a>]}>
                            <div className="cardText">
                            RESTful <a href="https://sheltered-peak-51983.herokuapp.com/blogs" target="_blank" rel="noopener noreferrer">Blog App</a><br/>
                           <a href="https://github.com/gotaSlick/RESTful-Blog-App" target="_blank" rel="noopener noreferrer">Link to the code</a>
                           </div>
                        </Card>
                     </Col>

                      <Col s={12} m={6} l={4}>
                        <Card className="smallCard" 
                            header={<a href="https://immense-savannah-25274.herokuapp.com/" target="_blank" rel="noopener noreferrer"><CardTitle image={utubeCard}></CardTitle></a>} 
                            actions={[<a href='https://immense-savannah-25274.herokuapp.com/' target="_blank" rel="noopener noreferrer">Demo</a>]}>
                            <div className="cardText">
                            React <a href="https://immense-savannah-25274.herokuapp.com/" target="_blank" rel="noopener noreferrer">YoutubeApp</a><br/>
                           <a href="https://github.com/gotaSlick/Youtube-App" target="_blank" rel="noopener noreferrer">Link to the code</a>
                           </div>
                        </Card>
                     </Col>
                    
                    <Col s={12} m={6} l={4}>
                        <Card className="smallCard" 
                            header={<a href="https://infinite-island-45828.herokuapp.com/" target="_blank" rel="noopener noreferrer"><CardTitle image={booksCard}></CardTitle></a>} 
                            actions={[<a href='https://infinite-island-45828.herokuapp.com/' target="_blank" rel="noopener noreferrer">Demo</a>]}>
                            <div className="cardText">
                            A simple React Redux <a href="https://infinite-island-45828.herokuapp.com/" target="_blank" rel="noopener noreferrer">Books App</a><br/>
                           <a href="https://github.com/gotaSlick/Books-App-React-Redux" target="_blank" rel="noopener noreferrer">Link to the code</a>
                           </div>
                        </Card>
                     </Col>

                     <Col s={12} m={6} l={4}>
                        <Card className="smallCard" 
                            header={<a href="http://salty-island-66924.herokuapp.com/" target="_blank" rel="noopener noreferrer"><CardTitle image={forecastCard}></CardTitle></a>} 
                            actions={[<a href='http://salty-island-66924.herokuapp.com/' target="_blank" rel="noopener noreferrer">Demo</a>]}>
                            <div className="cardText">
                            React Redux <a href="http://salty-island-66924.herokuapp.com/" target="_blank" rel="noopener noreferrer">Weather Forecast App</a><br/>
                           <a href="https://github.com/gotaSlick/Forecast-App" target="_blank" rel="noopener noreferrer">Link to the code</a>
                           </div>
                        </Card>
                     </Col>

                </Row>
            </div>
        );
    }
}

export default Projects;