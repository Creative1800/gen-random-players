import React from 'react'

const Header = ({ selectFieldSize }) => {

  const startGeneratingPlayers = () => {
    const xAxisInput = document.getElementById('x-axis-input').value;
    const yAxisInput = document.getElementById('y-axis-input').value

    if(xAxisInput >= 10 && 
      xAxisInput <= 100 && 
      yAxisInput >= 10 &&
      yAxisInput <= 100) {
        changeFieldAspectRatio(xAxisInput, yAxisInput)
        selectFieldSize(
          Number(document.getElementById('x-axis-input').value),
          Number(document.getElementById('y-axis-input').value)            
        )
    } else {
      window.alert('Field size is not between 10 and 100!')
    }
  }

  const changeFieldAspectRatio = (x, y) => {
    const field = document.getElementById('field')

    field.style.aspectRatio = `${y}/${x}`

    if(x > y) {
      field.style.width = 'initial';
      field.style.maxHeight = '90vh';
      field.style.height = '100vh';
    } else {
      field.style.height = 'initial';
      field.style.maxWidth = '90vh';
      field.style.width = '95%';
    }
  }

  return (
    <div className='header'>
      <h2>Select field size</h2>
      <h3>(10-100)</h3>
      <div className='form'>
        <input 
          id='x-axis-input'
          type="number"  
          defaultValue={10} />
        <input 
          id='y-axis-input'
          type="number" 
          defaultValue={10} />
        <button onClick={startGeneratingPlayers}>
            Start
        </button>
      </div>
    </div>
  )
}

export default Header