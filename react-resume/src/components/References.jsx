import React from 'react';

function References () {
    const referees = [
      {
        name: 'Connor Hutchinson',
        title: 'Software Engineer',
        company: 'Instacart',
        email: 'connor.hutchinson@instacart.com',
        phone: '0456 059 796'
      },
      {
        name: 'Beatrice Catalla',
        title: 'Assistant Site Manager',
        company: 'Village Cinemas Fountain Gate',
        email: 'beatricecatalla@gmail.com',
        phone: '0468 708 955'
      },
      {
        name: 'Tristan Fulham',
        title: 'District Manager',
        company: 'Village Cinemas',
        email: 'tristan_fulham@village-cinemas.com',
        phone: '0419 971 153'
      },
      {
        name: 'Ben Schulz',
        title: 'Digital Cinema Lead',
        company: 'Village Cinemas',
        email: 'ben_schulz@village-cinemas.com',
        phone: ''
      },
      {
        name: 'Brent Deayton',
        title: 'Learning & Development Coordinator',
        company: 'Village Cinemas',
        email: 'brent_deayton@vrl.com.au',
        phone: ''
      }
    ];
  
    for(let i = 0; i < referees.length; i++) {
      Object.defineProperty(
        referees[i], 
        'id', 
        {
          value: i,
          enumerable: false
        }
      );
    };
  
    return (
      <div className='referees'>
        {referees.map(referee => 
          <div key={referee.id} className='referee' id={referee.name}>
            <h4>{referee.name}</h4>
            <ul>
              {Object.entries(referee).map(([key, value]) => (
                key !== 'name' && value && (
                  <li key={key}>{value}</li>
                )
              ))}
            </ul>
          </div>
        )}
      </div>
    )
}

export default References;