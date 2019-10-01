import React from 'react';
import Button from '../Button'
import './style.css';

class WhiteButton extends Button {
  render() {
    return (
      <div
        className="piano-button piano-button__white"
        onMouseDown={this.playSound}
        onMouseUp={this.muteSound}
      />
    )
  }
}

WhiteButton.propTypes = {
  ...Button.propTypes,
};

export default WhiteButton;
