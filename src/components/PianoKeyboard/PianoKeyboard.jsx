import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'react-fast-compare';
import WhiteButton from '../WhiteButton'
import BlackButton from '../BlackButton'
import './style.css';

class PianoKeyboard extends React.PureComponent {
  state = {
    pressedKeys: [],
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.demoConfig, prevProps.demoConfig)) {
      this.runDemo();
    }
  }

  runDemo() {
    let delay = 0;
    console.log('runDemo');
    this.props.demoConfig.forEach(item => {
      setTimeout(() => {
        console.log('pressed', item.key);
        this.handleKeyDown({ key: item.key });
        setTimeout(() => this.handleKeyUp({ key: item.key }), item.duration - 10);
      }, delay);
      delay += item.duration;
    })
  }

  handleKeyDown = (event) => {
    const { key } = event;
    const { pressedKeys } = this.state;
    if (pressedKeys.includes(key) === false) {
      this.setState({ pressedKeys: [...pressedKeys, key] });
    }
  };

  handleKeyUp = (event) => {
    const { key } = event;
    const { pressedKeys } = this.state;
    if (pressedKeys.includes(key) === true) {
      const newPressedKeys = pressedKeys.filter(pressedKey => pressedKey !== key);
      this.setState({ pressedKeys: newPressedKeys });
    }
  };

  renderButton = (button, index) => {
    const Button = button.type === 'black' ? BlackButton : WhiteButton;
    return (
      <Button
        key={index}
        keyName={button.key}
        playSound={this.state.pressedKeys.includes(button.key)}
        soundFrequency={button.soundFrequency}
        onKeyDown={() => this.handleKeyDown({ key: button.key })}
        onKeyUp={() => this.handleKeyUp({ key: button.key })}
      />
    )
  };

  renderButtons() {
    return this.props.buttonsConfig.map(this.renderButton);
  }

  render() {
    return (
      <div className="piano-keyboard">
        {this.renderButtons()}
      </div>
    )
  }
}

PianoKeyboard.propTypes = {
  buttonsConfig: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['black', 'white']),
      key: PropTypes.string,
      soundFrequency: PropTypes.number,
    })
  ),
  demoConfig: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
    })
  )
};

export default PianoKeyboard;
