import React, { useState } from 'react';
import Numberselector from './Numberselector'
import Rolldice from './Rolldice';
import '../Components/Dice.css';

const Dice = () => {
  const [isColor, setIsColor] = useState('');
  const arr = [1, 2, 3, 4, 5, 6];

  const kabitaStyle = {
    height: '30px',
    width: '30px',

    border: '2px solid black',
    display: 'inline',
    padding: '20px',
    marginLeft: '90px',
  };

  return (
    <div>
   <Numberselector/>
      <div className="hh">
        {arr.map((item, index) => (
          <div
            key={index}
            onClick={() => setIsColor(item)}
            style={{
              ...kabitaStyle,
              backgroundColor: isColor === item ? 'black' : 'white',
              color: isColor === item ?'white' : 'black',
            }}
          >
            {item}
          </div>
        ))}
        <Rolldice/>
      </div>
    </div>
  );
};

export default Dice;



