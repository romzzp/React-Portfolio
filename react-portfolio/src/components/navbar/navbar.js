import React from 'react';
import './navbar.css';

function Navbar(props) {
    return (
        <div>
            <nav>
                <ul>
                    <a href="#"><li onClick={() => props.handlePageChange("About")}>
                        About
                    </li></a>
                    <a href="#"><li onClick={() => props.handlePageChange("Projects")}>
                        Projects
                    </li></a>
                    <a href="#"><li onClick={() => props.handlePageChange("Contact")}>
                        Contact
                    </li></a>
                    <a href="#"><li onClick={() => props.handlePageChange("Resume")}>
                        Resume
                    </li></a>
                </ul>
            </nav >
        </div>
    )
};

export default Navbar;
