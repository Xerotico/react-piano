import React from 'react';
import Button from '../Button'
import './style.css';

class BlackButton extends Button {
  render() {
    return (
      <div
        className="piano-button piano-button__black"
        onMouseDown={this.playSound}
        onMouseUp={this.muteSound}
      />
    )
  }
}

BlackButton.propTypes = {
  ...Button.propTypes,
};

export default BlackButton;
