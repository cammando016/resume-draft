import React from 'react';

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

export default SportForm;