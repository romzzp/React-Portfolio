import React, { useState } from 'react';
import './header.css';
import NavBar from '../navbar/navbar';
import About from '../../pages/about/about';
import Contact from '../../pages/contact/contact';
import Projects from '../../pages/projects/projects';
import Resume from '../../pages/resume/resume';



function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    const pageChange = (page) => setCurrentPage(page);

    const pageRender = () => {
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        return <About />;
    };

    return (
        <div>
            <div>
                <h2>Welcome</h2>
                <NavBar currentPage={currentPage} pageChange={pageChange} />
            </div>
            {pageRender()}
        </div>
    )
}


export default Header;