
import React from 'react';
import '/style.css';



interface LotteryBallProps {
  number: number;
};

const LotteryBall: React.FC<LotteryBallProps> = ({number}) => {
  return <div className="lottery-ball">{number}</div>
};

export default LotteryBall;
