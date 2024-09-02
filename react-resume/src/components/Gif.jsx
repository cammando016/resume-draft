import React from 'react';

//Function to up sport gif from API data
async function updateGif() {
    let sport = document.querySelector('input[name="sport"]:checked');  

    if (!sport) {
      console.error('No sport selected');
      return;
    } else {
      sport = sport.value;
    }
    
    //const sport = 'afl';
    const img = document.querySelector('#gif');
    const gifUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=tfNuQGPXxDFDq0JKfJ45Vu5wnkPzTZKy&s=' + sport;
    
    //Fetch gif of selected sport
    try {
      const response = await fetch (gifUrl, {mode:'cors'});
      const data = await response.json();
      img.src = data.data.images.original.url;
    } 
    catch (error) {
      console.error('Error fetching gif: ', error);
    }
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

export default Gif;