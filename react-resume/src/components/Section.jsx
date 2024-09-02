import React from "react";
import { useState } from 'react'

//Template component to create resume sections
function Section({ children, title, id }) {
    //Used to toggle showing or hiding content under each section heading on button click
    const [hide, setHide] = useState(false);
    function hideSection () {
      setHide(!hide);
    }
    
    return (
      <div id={id} className='resume-section'>
        <div className='section-heading'>
          <h2 className='section-title'>{title}</h2>
          <button onClick={hideSection}>{hide ? 'Show' : 'Hide'}</button>
        </div>
        {!hide && <div className='section-data'>{children}</div>}
      </div>
    );
}

export default Section;