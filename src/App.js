import { useState } from 'react';
import './App.css';
import Field from './components/field/field';
import Header from './components/header/header'

function App() {
  const [ fieldSize, setFieldSize ] = useState([0,0])

  const selectFieldSize = (xSize, ySize) => {
    setFieldSize([xSize, ySize])
  }

  return (
    <div className="App">
      <Header selectFieldSize={selectFieldSize} />
      <Field fieldSize={fieldSize} />
    </div>
  );
}

export default App;
