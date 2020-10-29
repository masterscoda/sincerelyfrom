import React, { Component, useState, useEffect } from 'react';
import './App.css';
import {Navbar, Nav, NavItem, Container, Image} from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Destinations from './Pages/Destinations';
import {getPosts} from './api/ghost';

function App() {
  const [list, setList] = useState([]);
  const img1 = require("./Images/sincerelyfrom.png")

  useEffect(() => {
    let mounted = true;
    getPosts()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="App">
      <Container >
        <Navbar className="MainNav">
          <Image className="MainImg" src={img1} fluid />
          <Nav className="MainNavLinks">
            <NavItem className="NavItem">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem className="NavItem" >
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem className="NavItem" >
              <Link to="/blog">Blog</Link>
            </NavItem>
            <NavItem className="NavItem">
              <Link to="/destinations">Destinations</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/destinations' component={Destinations} />
        </Switch>
    </div>
  );
}


export default App;
