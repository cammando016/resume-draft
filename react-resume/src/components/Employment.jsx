import React from 'react';

function Employment () {
    const employmentHistory = [
      {
        id: 0,
        location: 'Village Cinemas Fountain Gate',
        dates: 'August 2013 - Present',
        positions: [
          {
            posid: 0,
            postitle: 'Team Leader',
            dates: 'July 2015 - October 2016',
            duties: [
              'Area supervision', 
              'New employee training/onboarding', 
              'Customer Service'
            ]
          },
          {
            posid: 1,
            postitle: 'Manager',
            dates: 'October 2016 - present',
            duties: [
              'Site supervision', 
              'Oversee team development programs', 
              'Site projection & technical support leader', 
              'Finance & complaince manager'
            ]
          }
        ]
      },
      {
        id: 1,
        location: 'Village Cinemas - Fixed term project work',
        dates: 'March 2024 - July 2024',
        positions: [
          {
            posid: 0,
            postitle: 'Projection/Technical Team - DCinema Developer (Secondment)',
            dates: 'March 2024 - May 2024',
            duties: [
              'My main project focus with the projection team was creating a python script to send and receive MQTT messages via AWS. These messages were received from an IoT device with the intention of allowing guests to control the volume of a cinema during private screenings. During the time on this project, I also assisted with other general projection team duties including content management, hardware replacement and writing guides for projector troubleshooting.'
            ]
          },
          {
            posid: 1,
            postitle: 'Learning & Development Project Assistant',
            dates: 'May 2024 - July 2024',
            duties: [
              'On the back of the projection project, I was then asked to join another department to assist in the rollout and training for a new frontline position, the Guest Experience Supervisor. I was part of the team that determined the duties which should be fulfilled and then designed and facilitated an onboarding training day for the successful applicants. This rollout was very well received by the frontline leaders, as a result our team is returning to continue working together, with our next task to overhaul the current training for new hires joining the company.'
            ]
          }
        ]
      },
      {
        id: 2,
        location: 'Halo Service Solutions',
        dates: 'April 2023 - October 2023',
        positions: [
          {
            posid: 0,
            postitle: 'Graduate Software Consultant',
            dates: 'April 2023 - October 2023',
            duties: [
              'Software support', 
              'SQL reporting', 
              'Consulting & product education'
            ]
          }
        ]
      }
    ];
  
    return (
      <>
        {employmentHistory.map(employment => 
          <div className='job' key={employment.id}>
            <h3>{employment.location}</h3>
            <p>{employment.dates}</p>
            <h4>Positions</h4>
            <div className='positions'>{employment.positions.map(position => 
              (
                <div className='job-position' key={position.posid}>
                <p><u>{position.postitle}</u></p>
                <p>{position.dates}</p>
                <p>Duties</p>
                <ul className='position-duties'>
                  {position.duties.map((duty, index) => 
                    (
                      <li key={index}>{duty}</li>
                    )  
                  )}
                </ul>
                </div>
              )
              )}
            </div>
          </div>
        )}
      </>
    )
}

export default Employment;