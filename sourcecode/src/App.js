import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//import ReactFluidHeader from 'react-fluid-header';

//components
import Header from './components/headerComponent/Header';
import NavBar from './components/navbarComponent/NavBar';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Footer from './components/footerComponent/Footer';
import Contact from './components/Contact';



//includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Header />
        <NavBar />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
