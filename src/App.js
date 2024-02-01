import React, { Component } from 'react';
import Random from './Component/Random';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyBackgroundColors: '#0d6efd',
    };
    this.getRandomColor = this.getRandomColor.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    const { bodyBackgroundColors } = this.state;
    document.body.style.transition = 'background-color 0.5s';
    document.body.style.color = bodyBackgroundColors;
    document.body.style.backgroundColor = bodyBackgroundColors;
  }

  componentDidUpdate(_, prevState) {
    const { bodyBackgroundColors } = this.state;
    if (prevState.bodyBackgroundColors !== bodyBackgroundColors) {
      document.body.style.backgroundColor = bodyBackgroundColors;
      document.body.style.color = bodyBackgroundColors;
    }
    const icons = document.querySelectorAll('.fa-brands');
    icons.forEach((icon) => {
      // eslint-disable-next-line no-param-reassign
      icon.style.color = bodyBackgroundColors;
    });
  }

  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  changeColor = () => {
    const randomColor = this.getRandomColor();
    this.setState({
      bodyBackgroundColors: randomColor,
    });
  };

  render() {
    const { bodyBackgroundColors } = this.state;
    return (
      <>
        <Random
          changeColors={this.changeColor}
          bodyBackgroundColors={bodyBackgroundColors}
        />
      </>
    );
  }
}

export default App;
