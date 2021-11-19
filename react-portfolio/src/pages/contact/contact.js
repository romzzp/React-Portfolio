import React from 'react';
import './contact.css';
import images from '../../assets';


function Contact() {

    return (
        <div class="aboutContent">
            <img src={images.mine} alt="profile pic" />
            <div class="contact">
                <h1>Contact</h1>
                <p>If you have any questions and need to reach me, please reach me at <span>romzz.patel@gmail.com</span>.<br />
                    Or you can cantact me on my <a href="github.com/romzzp">Github</a>
                </p>
            </div>
        </div>
    )
}


export default Contact;