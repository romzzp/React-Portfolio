import React from 'react';
import './about.css';
import images from '../../assets';


function About() {

    return (
        <div class="aboutContent">
            <img src={images.mine} alt="profile pic" />
            <div class="aboutMe">
                <h1>Hi, I'm Romal Patel</h1>
                <p>I am on my way to become a full stack Web Developer, I am curently enrolled in Full Stack Coding Bootcamp at University of Toronto.
                    Please checkout the Projects I have worked on above.
                </p>
            </div>
        </div>
    )
}


export default About;