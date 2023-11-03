import React, { useState } from 'react';

const Rolldice = () => {
  const [isdice, setisdice] = useState(1);

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roled = () => {
    let ran = randomNum(1, 7);
    setisdice(ran.toString());
  };

  // Define the image source dynamically within the component
  const imageSource = "./Image/dice_1.png";

  return (
    <div>
      <img src={imageSource} onClick={roled} alt="hh" />
    </div>
  );
};

export default Rolldice;

