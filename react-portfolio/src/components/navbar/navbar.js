import React from 'react';
import './navbar.css';

function Navbar(props) {
    return (
        <div>
            <nav>
                <ul>
                    <a href="#"><li onClick={() => props.pageChange("About")}>
                        About
                    </li></a>
                    <a href="#"><li onClick={() => props.pageChange("Projects")}>
                        Projects
                    </li></a>
                    <a href="#"><li onClick={() => props.pageChange("Contact")}>
                        Contact
                    </li></a>
                    <a href="#"><li onClick={() => props.pageChange("Resume")}>
                        Resume
                    </li></a>
                </ul>
            </nav >
        </div>
    )
};

export default Navbar;
