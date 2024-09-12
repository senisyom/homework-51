import React, { useState } from 'react';
import Ball from './components/balls.tsx'
import './App.css';



const App = () => {
  const baseNumbers = [5, 11, 16, 23, 32]
  const [number, setNumber] = useState<number[]>(baseNumbers)
  
   const generateRandomNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const randomNum = Math.floor(Math.random() * (36 - 5 + 1)) + 5; // Генерация числа от 5 до 36
      if (!newNumbers.includes(randomNum)) { // Проверка на уникальность
        newNumbers.push(randomNum);
      }
    }
    newNumbers.sort((a, b) => a - b); // Сортировка по возрастанию
    return newNumbers;
  };

  return (
    <div className="app">
      <div className="numbers">
        {number.map((num) => (
          <Ball key={num} number={num} />
        ))}
      </div>
      <button onClick={generateRandomNumbers}>
        New numbers
      </button>
    </div>
  )
}

export default App
