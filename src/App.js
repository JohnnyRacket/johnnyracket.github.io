import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'

import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import History from './History/History';
import About from './About/About';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';
import BlogPost from './BlogPost/BlogPost';

import projects from './Projects/projects.json';
import posts from './Blog/posts.json';
import Resume from './Resume/Resume';


export default class App extends Component {
  componentDidMount() {
    document.title = "John Harrison"
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="Container">
            <NavBar />



            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" render={(props) => (<Projects projects={projects} />)} />
            <Route exact path="/resume" render={(props) => (<Resume />)} />
            {/* <Route path="/blog/post/:id" component={BlogPost}/> */}
            <Route path="/history" component={History} />



            <Footer />
          </div>
        </div>
      </HashRouter>
    );
  }
}


