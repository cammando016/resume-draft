import './App.css'
import React from 'react';
import Section from './components/Section';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Employment from './components/Employment';
import Programming from './components/Programming';
import Skills from './components/Skills';
import References from './components/References';
import Sport from './components/Sport';
import SportForm from './components/SportForm';
import NavPane from './components/NavPane';
import Gif from './components/Gif';

function App() {
  return (
    <>
      {/* Left hand side pane with table of contents */}
      <div id='nav-pane'>
        <NavPane></NavPane>
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

      {/* Right hand side pane, using giphy API to generate sport gif from user selection */}
      <Sport>
        <SportForm></SportForm>
        <Gif></Gif>
      </Sport>
    </>
  );
}

export default App