/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import images from '../../assets';
import './footer.css';


function Footer() {

    return (
        <div class="footerContent">
            <a href="https://www.linkedin.com/in/romal-patel-a40521118"><img src={images.linkedin} width="50"
                height="50"></img></a>
            <a href="https://github.com/romzzp"><img src={images.github} width="50" height="50"></img></a>
        </div>
    )
}


export default Footer;