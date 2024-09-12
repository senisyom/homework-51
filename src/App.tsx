import React, { useState } from 'react';
import Ball from './components/balls.tsx'
import './App.css';



const App: React.FC = () => {
  const baseNumbers = [5, 11, 16, 23, 32]
  const [numbers, setNumbers] = useState<number[]>(baseNumbers)
  
  const createNumbers = () => {

    let newNumbers: number[] = []

    while (newNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;

      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber)
      }
    }
    newNumbers.sort((a, b) => a - b);
    setNumbers(newNumbers)
  }


    return (
      <div className="app">
        <div className="numbers">
          {numbers.map((num) => (
            <Ball key={num} number={num} />
          ))}
        </div>
        <button onClick={createNumbers}>
          New numbers
        </button>
      </div>
    )
  }

  

export default App
