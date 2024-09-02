import React from 'react';

function NavPane () {
    return (
        <>
            {/* Left hand side pane with table of contents */}
            <div className='nav-text'>
                <h1>Cameron Anderson Resume</h1>
                <h4>Contents</h4>
                <div className='contents-table'>
                    <p><a href='#contact-section'>General Information</a></p>
                    <p><a href='#education-section'>Education</a></p>
                    <p><a href='#employment-section'>Employment</a></p>
                    <p><a href='#programming-section'>Programming Experience</a></p>
                    <p><a href='#skills-section'>Skills</a></p>
                    <p><a href='#references-section'>References</a></p>
                </div>
            </div>
            <div id='portfolio'>
                <h4>Portfolio</h4>
                <a className='portfolio-link' id='cover-letter'>Cover Letter</a>
                <a className='portfolio-link' id='projector-training'>Projector Training</a>
            </div>
        </>
    )
}

export default NavPane;