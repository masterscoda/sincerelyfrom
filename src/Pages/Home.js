import React, { Component } from 'react';
import {Container, Image} from 'react-bootstrap';

class Home extends Component {
  constructor() {
    super();
    this.images = {
      img1: require("../Images/thebend.jpg")
    }
  }

  componentDidMount(){
    this.images.img1 = require("../Images/thebend.jpg");
  }

  render(){
  return (
    <Container>
        <Image src={this.images.img1} fluid />
    </Container>
  );
  }
}

export default Home;