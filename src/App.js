import React from 'react';
import PianoKeyboard from './components/PianoKeyboard';

function getFrequencyByKeyNumber(keyNumber) {
  // formula is described here https://en.wikipedia.org/wiki/Piano_key_frequencies
  return Math.pow(2, (keyNumber - 49) / 12) * 440;
}

class App extends React.PureComponent {
  state = {
    demoConfig: []
  };

  render() {
    return (
      <div className="App">
        <PianoKeyboard
          demoConfig={this.state.demoConfig}
          buttonsConfig={[
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(32), key: '1'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(33), key: '2'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(34), key: '3'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(35), key: '4'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(36), key: '5'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(37), key: '6'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(38), key: '7'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(39), key: '8'},

            {type: 'white', soundFrequency: getFrequencyByKeyNumber(40), key: '9'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(41), key: '0'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(42), key: '-'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(43), key: '='},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(44), key: 'q'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(45), key: 'w'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(46), key: 'e'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(47), key: 'r'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(48), key: 't'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(49), key: 'y'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(50), key: 'u'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(51), key: 'i'},

            {type: 'white', soundFrequency: getFrequencyByKeyNumber(52), key: 'o'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(53), key: 'p'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(54), key: '['},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(55), key: ']'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(56), key: '\\'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(57), key: 'a'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(58), key: 's'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(59), key: 'd'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(60), key: 'f'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(61), key: 'g'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(62), key: 'h'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(63), key: 'j'},

            {type: 'white', soundFrequency: getFrequencyByKeyNumber(64), key: 'k'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(65), key: 'l'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(66), key: ';'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(67), key: '\''},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(68), key: 'z'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(69), key: 'x'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(70), key: 'c'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(71), key: 'v'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(72), key: 'b'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(73), key: 'n'},
            {type: 'black', soundFrequency: getFrequencyByKeyNumber(74), key: 'm'},
            {type: 'white', soundFrequency: getFrequencyByKeyNumber(75), key: ','},
          ]}
        />
        <button
          onClick={() => {
            this.setState({
              demoConfig: [
                {key: '', duration: 1000},
                {key: '-', duration: 400},
                {key: 'y', duration: 500},
                {key: '', duration: 100},
                {key: 'y', duration: 500},
                {key: 'w', duration: 500},
                {key: 'q', duration: 500},
                {key: '', duration: 100},
                {key: 'q', duration: 500},
                {key: '', duration: 100},
                {key: 'q', duration: 500},
                {key: '', duration: 100},
                {key: 'q', duration: 200},
                {key: 'w', duration: 500},
                {key: '-', duration: 500},
              ]
            })
          }}
        >
          Run demo
        </button>
      </div>
    );
  }
}

export default App;
