import React from 'react';
import PianoKeyboard from './components/PianoKeyboard';

function App() {
  return (
    <div className="App">
      <PianoKeyboard
        keysConfig={[
          { type: 'white', soundFrequency: 261.6 },
          { type: 'black', soundFrequency: 277.2 },
          { type: 'white', soundFrequency: 293.7 },
          { type: 'black', soundFrequency: 311.1 },
          { type: 'white', soundFrequency: 329.6 },
          { type: 'white', soundFrequency: 349.2 },
          { type: 'black', soundFrequency: 370.0 },
          { type: 'white', soundFrequency: 392.0 },
          { type: 'black', soundFrequency: 415.3 },
          { type: 'white', soundFrequency: 440.0 },
          { type: 'black', soundFrequency: 466.2 },
          { type: 'white', soundFrequency: 493.9 },
        ]}
      />
    </div>
  );
}

export default App;
