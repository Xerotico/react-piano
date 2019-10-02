import React from 'react';
import cx from 'classnames';
import Button from '../Button'
import './style.css';

class WhiteButton extends Button {
  render() {
    return (
      <div
        className={
          cx(
            'piano-button',
            'piano-button__white',
            { 'piano-button__pressed': this.props.playSound },
          )
        }
        {...this.getPropsMixin()}
      >
        {this.props.keyName}
      </div>
    )
  }
}

WhiteButton.propTypes = {
  ...Button.propTypes,
};

export default WhiteButton;
