import React from 'react';
import PropTypes from 'prop-types';
import WhiteButton from '../WhiteButton'
import BlackButton from '../BlackButton'
import './style.css';

class PianoKeyboard extends React.PureComponent {
  renderKey(key) {
    switch (key.type) {
      case 'white':
        return <WhiteButton soundFrequency={key.soundFrequency} />;
      case 'black':
        return <BlackButton soundFrequency={key.soundFrequency} />;
      default:
        return <div />;
    }
  }

  renderKeys() {
    return this.props.keysConfig.map(key => this.renderKey(key));
  }

  render() {
    return (
      <div
        className="piano-keyboard"
      >
        {this.renderKeys()}
      </div>
    )
  }
}

PianoKeyboard.propTypes = {
  keysConfig: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['black', 'white']),
      soundFrequency: PropTypes.number,
    })
  )
};

export default PianoKeyboard;
