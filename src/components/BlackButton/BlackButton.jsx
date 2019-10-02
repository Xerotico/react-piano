import React from 'react';
import cx from 'classnames';
import Button from '../Button'
import './style.css';

class BlackButton extends Button {
  render() {
    return (
      <div
        className={
          cx(
            'piano-button',
            'piano-button__black',
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

BlackButton.propTypes = {
  ...Button.propTypes,
};

export default BlackButton;
