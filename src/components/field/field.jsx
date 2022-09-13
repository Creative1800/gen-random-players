import React, { useEffect, useState } from 'react'
import '../../index.css'

const Field = ({ fieldSize }) => {
  let playingField = []
  const [ state, setState ] = useState([])
  let freeBoxes = []
  let table = ''

  

  useEffect(() => {
    if(fieldSize[0] !== 0 || fieldSize[1] !== 0) {
      initializeField()
    }

    table = document.querySelector('table')// querySelector('table')



  }, [fieldSize])

  const initializeField = () => {
    for (let x = 0; x < fieldSize[0] ; x++) {
      playingField.push([0])
      for (let y = 0; y < fieldSize[1] ; y++) {
          playingField[x][y] = '0';
          freeBoxes.push([x,y])
      }
    }

    while(freeBoxes.length > 0) {
      generatePlayer('A')
      if(freeBoxes.length > 0) {
        generatePlayer('B')
      }
    }

    setState([...playingField])
    console.log(playingField)
  }
  
  const generatePlayer = (player) => {
    const i = Math.floor(Math.random() * (freeBoxes.length - 1))
    let [ x , y ] = freeBoxes[i]

    freeBoxes.splice(i, 1)
    
    if(playingField[x][y] === '0') {
      playingField[x][y] = player
      if(x !== 0) {
        if(y !== 0) {
          playingField[x-1][y-1] = 'X'
          deleteFreeBox(x-1, y-1)
        }
        playingField[x-1][y] = 'X'
        deleteFreeBox(x-1, y)
        if(y < fieldSize[1]-1) {
          playingField[x-1][y+1] = 'X'
          deleteFreeBox(x-1, y+1)
        }
      }
      if(x < fieldSize[0]-1) {
        if(y !== 0) {
          playingField[x+1][y-1] = 'X'
          deleteFreeBox(x+1, y-1)
        }
        playingField[x+1][y] = 'X'
        deleteFreeBox(x+1, y)
        if(y < fieldSize[1]-1) {  
          playingField[x+1][y+1] = 'X'
          deleteFreeBox(x+1, y+1)
        }
      }

      if(y !== 0) {
        playingField[x][y-1] = 'X'
        deleteFreeBox(x, y-1)
      }

      if(y < fieldSize[1]-1) {
        playingField[x][y+1] = 'X'
        deleteFreeBox(x, y+1)
      }
    }
  }

  const deleteFreeBox = (x, y) => {
    const index = isItemInArray(freeBoxes, [x, y])

    if(index !== false) {
      freeBoxes.splice(index, 1)
    }
  } 

  const isItemInArray = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return i;
        }
    }
    return false
  }
  
  const boxes = state.map(item => {
    return (
      <tr>
      {item.map(item => {
        return (
          <td 
            className={
              item === 'A' ? 'player-a' :
              item === 'B' ? 'player-b' : 'neighbour'
            }
            > 
          
          </td>
          )
      })}
      </tr>

    )
  })

  const boxElements = Array.from(
    document.getElementsByClassName('box')
  );

  console.log(100 / fieldSize[1])
  console.log(100 / fieldSize[0])

  boxElements.forEach(box => {
    box.style.width = `${(100 / fieldSize[1])}%`;
    box.style.height = `${(100 / fieldSize[0])}%`;
    box.style.backgroundColor = 'purple';
  });

  


  return (
    //<div className='field'>
    <table className='field'>
      <tbody>
        { boxes }
      </tbody>  
    </table>
    //</div>
  )
}

export default Field