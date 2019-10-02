import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

// @abstract
class Button extends React.PureComponent {
  constructor(props) {
    super(props);

    this.audioContext = new AudioContext();
    this.audioOscillator = null;
  }

  componentDidUpdate() {
    if (this.props.playSound) {
      this.playSound();
      return;
    }
    this.muteSound();
  }

  componentWillUnmount() {
    this.muteSound();
  }

  createOscillator() {
    this.audioOscillator = this.audioContext.createOscillator();
    this.audioOscillator.type = 'sine';
    this.audioOscillator.connect(this.audioContext.destination);
  }

  destroyOscillator() {
    this.audioOscillator.disconnect(this.audioContext.destination);
    this.audioOscillator = null;
  }

  playSound = () => {
    if (this.audioOscillator === null) {
      this.createOscillator();
      this.audioOscillator.frequency.value = this.props.soundFrequency;
      this.audioOscillator.start();
    }
  };

  muteSound = () => {
    if (this.audioOscillator !== null) {
      this.audioOscillator.stop();
      this.destroyOscillator();
    }
  };

  getPropsMixin() {
    return {
      onMouseDown: this.props.onKeyDown,
      onMouseUp: this.props.onKeyUp,
      onMouseLeave: this.props.onKeyUp,
    }
  }
}

Button.defaultProps = {
  playSound: false,
  keyName: '',
  onKeyDown: () => {},
  onKeyUp: () => {},
};

Button.propTypes = {
  playSound: PropTypes.bool,
  keyName: PropTypes.string,
  soundFrequency: PropTypes.number.isRequired,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
};

export default Button;
