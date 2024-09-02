import React from 'react';

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
        data: 'Snowboarding, watching and playing sport, playing story games'
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

export default ContactInfo;