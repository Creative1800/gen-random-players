import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Header = ({ selectFieldSize }) => {

  return (
    <div className='header'>
      <h2>Select field size</h2>
      <h3>(10-100)</h3>
      <div className='form'>

        <div>
          <button>-</button>
          <input 
            id='x-axis-input'
            type="number"  
            defaultValue={10} />
          <button>+</button>
        </div>

        <div>
          <button>-</button>
          <input 
            id='y-axis-input'
            type="number" 
            defaultValue={10} />
          <button>+</button>
        </div>
        
        <button 
          onClick={
            () => selectFieldSize(
              Number(document.getElementById('x-axis-input').value),
              Number(document.getElementById('y-axis-input').value)            
              )
            }>
            Start
        </button>
      </div>
    </div>
  )
}

export default Header