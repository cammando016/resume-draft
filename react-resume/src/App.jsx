import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Section({ children, title, id }) {
  return (
    <div id={id} className='resume-section'>
      <h2 className='section-title'>{title}</h2>
      <div className='section-data'>{children}</div>
    </div>
  );
}

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
    }
  ];
  
  return (
    <>
      {contactDetails.map(detail => 
      <p className='contact-detail' key={detail.id}>{detail.heading}: {detail.data}</p>
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
          duties: ['Area supervision', 'New employee training/onboarding', 'Customer Service']
        },
        {
          posid: 1,
          postitle: 'Manager',
          dates: 'October 2016 - present',
          duties: ['Site supervision', 'Oversee team development programs', 'Site projection & technical support leader', 'Finance & complaince manager']
        }
      ]
    },
    {
      id: 1,
      location: 'Halo Service Solutions',
      dates: 'April 2023 - October 2023',
      positions: [
        {
          posid: 0,
          postitle: 'Graduate Software Consultant',
          dates: 'April 2023 - October 2023',
          duties: ['Software support', 'SQL reporting', 'Consulting & product education']
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
      phone: ''
    },
    {
      name: 'Ben Schulz',
      title: '',
      company: 'Village Cinemas',
      email: '',
      phone: ''
    },
    {
      name: 'Brent Deayton',
      title: '',
      company: 'Village Cinemas',
      email: '',
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
    <>
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
    </>
  )
}

function App() {
  return (
    <>
      <div id='nav-pane'>
        <p>placeholder text</p>
      </div>

      <div id='content-pane'>
        <Section title={'Contact Information'} id={'contact-section'}>
          <ContactInfo></ContactInfo>
        </Section>

        <Section title={'Education'} id={'education-section'}>
          <Education></Education>
        </Section>

        <Section title={'Employment'} id={'employment-section'}>
          <Employment></Employment>
        </Section>

        <Section title={'Skills'} id={'skills-section'}>
          <Skills></Skills>
        </Section>

        <Section title={'References'} id={'references-section'}>
          <References></References>
        </Section>
      </div>

      <div id='trivia-pane'>
        <p>placeholder text</p>
      </div>
    </>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App