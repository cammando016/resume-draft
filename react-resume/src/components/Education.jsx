import React from 'react';

function Education () {
    const educationHistory = [
      {
        id: 0,
        date: '2018 - 2023',
        location: 'Swinburne University of Technology',
        course: 'Bachelor of ICT',
        extras: 'Major in Business Analysis'
      },
      {
        id: 1,
        date: '2010 - 2015',
        location: 'Gleneagles Secondary College',
        course: 'Victorian Certificate of Education',
        extras: '2015 Valedictorian'
      }
    ];
  
    return (
      <>
        {educationHistory.map(education =>
          <div className='education-listing' key={education.id}>
            <h3>{education.location}</h3>
            <p>{education.date}</p>
            <p>{education.course}</p>
            <p>{education.extras}</p>
          </div>
        )}
      </>
    );
}

export default Education;