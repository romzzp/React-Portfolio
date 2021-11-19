import React from 'react';
import './resume.css';
import images from '../../assets';


function Resume() {

    return (
        <div class="resume">
            <img src={images.mine} alt="profile pic" />
            <div class="resumeLi">
                <h1>The Skills I have:</h1>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>NodeJS</li>
                <li>Express.JS</li>
                <li>Handlebars.JS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
                <li>React</li>
                <li>Bootstrap</li>
            </div>
        </div>
    )
}


export default Resume;