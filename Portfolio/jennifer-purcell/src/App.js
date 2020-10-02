import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import SingleProject from "./pages/SingleProjectPage";
import Languages from "./pages/LanguagesPage"
import Certifications from "./pages/CertificationsPage"

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/languages" component={Languages} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id" component={SingleProject} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;

