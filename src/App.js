import React, { useEffect, useState } from 'react';
import Random from './Component/Random';
import './App.css';

const App = () => {
  const [bodyBackgroundColors, setBodyBackgroundColors] = useState('#0d6efd');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    setBodyBackgroundColors(randomColor);
  };

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s';
    document.body.style.color = bodyBackgroundColors;
    document.body.style.backgroundColor = bodyBackgroundColors;
    const icons = document.querySelectorAll('.fa-brands');
    icons.forEach((icon) => {
      // eslint-disable-next-line no-param-reassign
      icon.style.color = bodyBackgroundColors;
    });
  }, [bodyBackgroundColors]);

  return (
    <>
      <Random
        changeColors={changeColor}
        bodyBackgroundColors={bodyBackgroundColors}
      />
    </>
  );
};

export default App;
