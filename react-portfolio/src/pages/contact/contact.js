import React from 'react';
import './contact.css';
import images from '../../assets';


function Contact() {

    return (
        <div class="aboutContent">
            <img src={images.mine} alt="profile pic" />
            <div class="aboutMe">
                <h1>Contact me:</h1>
                <p>If you have any questions and need to reach me, please reach me at romzz.patel@gmail.com
                    Or you can cantact me on my Github: github.com/romzzp
                </p>
            </div>
        </div>
    )
}


export default Contact;