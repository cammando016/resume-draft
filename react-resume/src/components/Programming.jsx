import React from 'react';

function Programming () {
    const uniProgramming = [
      {
        id: 0,
        unit: 'Introduction to Programming',
        languages: [
          'Ruby'
        ],
        details: 'First semester unit introducing programming concepts. This was a beginner class teaching the basics of variables and data types, sequencing and best practices.'
      },
      {
        id: 1,
        unit: 'Introduction to Web Development',
        languages: [
          'HTML',
          'CSS',
          'JavaScript'
        ],
        details: 'Another first semester unit, teaching the basics of front end web development.'
      },
      {
        id: 2,
        unit: 'Object Oriented Programming',
        languages: [
          'C#'
        ],
        details: 'This was a second year unit following intro to programming. It focused on using classes, functions and other reusable techniques for more efficent code.'
      }
    ];
  
    const jobProgramming = [
      {
        id: 0,
        language: 'SQL',
        location: 'Halo Service Solutions',
        details: 'As part of my graduate role at Halo, customer support included bespoke SQL reporting. I had a basic understanding of SQL before starting the role, but I had to learn the company schema to udnerstand how to present data requested by customers and reinforce my SQL knowledge to complete the reports efficiently. I began taking most report tickets after my first few months, and found it extremely enjoyable becoming more confident and knowledgable about the reports we could provide.'
      },
      {
        id: 1,
        language: 'Python',
        location: 'Village Cinemas',
        details: 'During the projection project I worked on, I wrote a python script that subscribed and published MQTT messaged via AWS. The script received a message from the end user device with a cinema number and a volume command for up or down. From a parsed config file specifying the audio appliance type, it then generates a TCP message to send to the audio appliance to adjust the in cinema volume. Once the volume was adjusted, the audio unit sends an update of the new volume which is published back to the end user device. As I had never written python code before, I had to apply the general programming skills I had learned to a new language which was a good test of my university experience applied to a real project. I found it extremely rewarding pushing through each of the various roadblocks that came up during this project and having an opportunity to apply the concepts I had studied.'
      }
    ]
  
    return (
      <>
      <div className='uni-programming'>
        <h3>University Programming</h3>
        {uniProgramming.map(uni => 
            <div key={uni.id}>
              <p><u>{uni.unit}</u></p>
              <ul>{uni.languages.map((language, index) => 
                <li key={index}>{language}</li>
              )}
              </ul>
              <p>{uni.details}</p>
            </div>
        )}
      </div>
  
      <div className='other-programming'>
        <h3>Other Programming</h3>
        {jobProgramming.map(job => 
          <div key={job.id}>
            <p><u>{job.location}</u></p>
            <p>{job.language}</p>
            <p>{job.details}</p>
          </div>
        )}
      </div>
      </>
    )
}

export default Programming;