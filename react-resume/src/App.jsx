import { useState } from 'react'
import './App.css'

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

//Resume Section Components
function ContactInfo () {
  const contactDetails = [
    {
      id: 0,
      heading: 'Contact Number',
      data: '0481 722 644' 
    },
    {
      id: 1,
      heading: 'Email Address',
      data: 'crpanderson@outlook.com'
    },
    {
      id: 2,
      heading: 'Address',
      data: '20 Macleod Circuit, Pakenham 3810'
    },
    {
      id: 3,
      heading: 'Linked In',
      data: 'https://www.linkedin.com/in/cameron-anderson-6b3078209/'
    },
    {
      id: 4,
      heading: 'Github',
      data: 'https://github.com/cammando016'
    },
    {
      id: 5,
      heading: 'Favourite Up&Go',
      data: 'Protein Strawberry'
    },
    {
      id: 6,
      heading: 'Hobbies',
      data: 'Snowboarding, Watching AFL, NBA & NFL, Playing story games'
    }
  ];
  
  return (
    <>
      {contactDetails.map(detail => 
      <p className='contact-detail' key={detail.id}><h4 className='contact-heading'>{detail.heading}:</h4> {detail.data}</p>
      )}
    </>
  );
}

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

function Skills () {
  return (
    <>
      <h3>Accountability</h3>
      <p>My experience holding several management responsibilities at Village Cinemas helped me develop a strong sense of accountability for my work. At various times I have held all management portfolios and in these roles I am responsible for setting high standards and acknowleding my own opportunities to develop, so I hold myself to a high standard of quality work.</p>

      <h3>Conscientious</h3>
      <p>I take great pride in my work and always look for ways to excel. I believe setting a positive example through my work is the best way, to inspire my team to work to the best of their own abilities, or to be a contributor to team success myself.</p>
    
      <h3>Problem Solving</h3>
      <p>I enjoy the process of working through roadblocks and coming up with effective solutions for all workplace difficulties. I think problem solving is the best way to learn and is an essential skill to avoid becoming stuck everytime I encounter a challenge I haven't faced before.</p>

      <h3>Working Under Pressure</h3>
      <p>Managing at the busiest cinema in the country requires me to work diligently under often intense pressure, supporting the needs of my team and delivering outstand customer service to all guests. In the management role, I am responsible for assisting all around site, while proactively addressing potential issues and defusing any unhappy customers to facilitate enjoyable experiences for all guests.</p>
    </>
  )
}

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

//Sport components
function SportForm () {
  return (
    <>
      <form>
        <h2>Choose your favourite sport</h2>
        <input type='radio' name='sport' id='basketball' value='Basketball'></input>
        <label htmlFor='basketball'>Basketball</label>
        <input type='radio' name='sport' id='afl' value='AFL' defaultChecked></input>
        <label htmlFor='afl'>AFL</label>
        <input type='radio' name='sport' id='nhl' value='NHL'></input>
        <label htmlFor='nhl'>NHL</label>
      </form>
    </>
  )
}

function Gif() {
  return (
    <>
      <div id='sport-gif'>
        <img id='gif' src='#' alt='Sport Gif - Click Update Gif to generate!'></img>
        <div>
          <button onClick={updateGif}>Update Gif</button>
        </div>
      </div>
    </>
  )
}

function Sport ({ children }) {
  return (
    <div id='sport-pane'>
      {children}
    </div>
  )
}

//Function to up sport gif from API data
function updateGif() {
  const sport = document.querySelector('input[name="sport"]:checked').value;  
  const img = document.querySelector('#gif');
  const gifUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=tfNuQGPXxDFDq0JKfJ45Vu5wnkPzTZKy&s=' + sport;
  
  fetch(gifUrl, {mode:'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
}

function App() {
  return (
    <>
      {/* Left hand side pane with table of contents */}
      <div id='nav-pane'>
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
        <button id='cover-letter'>Cover Letter</button>
      </div>

      {/* Main content section of resume in center of screen */}
      <div id='content-pane'>
        <Section title={'General Information'} id={'contact-section'}>
          <ContactInfo></ContactInfo>
        </Section>

        <Section title={'Education'} id={'education-section'}>
          <Education></Education>
        </Section>

        <Section title={'Employment'} id={'employment-section'}>
          <Employment></Employment>
        </Section>

        <Section title={'Programming Experience'} id={'programming-section'}>
          <Programming></Programming>
        </Section>

        <Section title={'Skills'} id={'skills-section'}>
          <Skills></Skills>
        </Section>

        <Section title={'References'} id={'references-section'}>
          <References></References>
        </Section>
      </div>

      {/* Right hand side pane, demonstrating API use to generate sport trivia */}
      <Sport>
        <SportForm></SportForm>
        <Gif></Gif>
      </Sport>
    </>
  );
}

export default App