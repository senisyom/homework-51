
import React, { useState } from 'react';
import LotteryBall from './component/component';
import '/style.css';

const App: React.FC = () => {
  const initialNumbers = [5, 11, 16, 23, 32];
  const [numbers, setNumbers] = useState<number[]>(initialNumbers); 

  const generateNewNumbers = () => {
    const newNumbers: number[] = generateRandomNumbers(); 
    setNumbers(newNumbers);
  };

  const generateRandomNumbers = (): number[] => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 32) + 5;
      if (!newNumbers.includes(randomNum)) {
        newNumbers.push(randomNum);
      }
    }
        return newNumbers.sort((a, b) => a - b);
  };

  return (
    <div>
      <h1>Lottery</h1>
      <div className="lottery-balls-container">
        {numbers.map((num) => (
          <LotteryBall key={num} number={num} />
        ))}
      </div>
      <button onClick={generateNewNumbers}>New Numbers</button>
    </div>
  );
};

export default App;
