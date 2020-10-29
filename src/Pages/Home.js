import React, { Component } from 'react';
import {Container, Image} from 'react-bootstrap';
import { Parallax, Background } from "react-parallax";
import './Home.css';
//import {Image} from 'react-bootstrap';

function Home()  {
  const img1 = require("../Images/whitesands.jpg");
  const img2 = require("../Images/scuba.jpg");
  const sincerelyImg = require("../Images/sincerelyfrom.png")

  return (
      <div>
        <div>
          <Parallax bgImage={img1} strength={700}>
            <div style={{ height: 700 }}>
              <p className="ImageText">“Not till we are completely lost, or turned around, do we appreciate the vastness and strangeness of Nature.” -
Henry David Thoreau
</p>
            </div>
          </Parallax>
        </div>
        <div className="WelcomeSection">
          <div>
            <h2 className="WelcomeTitle">Welcome to </h2> 
            <Image className="" src={sincerelyImg} fluid />
          </div>
          <div>
            <p>A travel website dedicating to showing the adventures that Earth brings. </p>
          </div>
        
        </div>
        <div>
          <Parallax bgImage={img2} strength={700}>
            <div style={{ height: 700 }}>
              <div>HTML inside the parallax</div>
            </div>
          </Parallax>
        </div>
        <div>
          About me section
        </div>
    </div>
    );
}


export default Home;