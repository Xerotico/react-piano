import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

// @abstract
class Button extends React.PureComponent {
  constructor(props) {
    super(props);

    this.audioContext = new AudioContext();
    this.createOscillator();
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
    }
    this.audioOscillator.frequency.value = this.props.soundFrequency;
    this.audioOscillator.start();
  };

  muteSound = () => {
    this.audioOscillator.stop();
    this.destroyOscillator();
  };
}

Button.propTypes = {
  soundFrequency: PropTypes.number.isRequired,
};

export default Button;
