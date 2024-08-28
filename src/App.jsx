import { useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [pass, setPass] = useState('');

  function genPass() {
    let stringX = '';
    const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '1234567890';
    const symbol = '`!@#$%^&*()_+?><}|';

    if (includeCharacters) stringX += char;
    if (includeNumbers) stringX += number;
    if (includeSymbols) stringX += symbol;
    
    let generatedPass = '';  // Temporary variable to hold the generated password
    
    for (let i = 0; i < length; i++) {
      generatedPass += stringX.charAt(Math.floor(Math.random() * stringX.length));
    }

    setPass(generatedPass);
  }

  return (
    <>
      <h1>Pass-Generator</h1>
      <input type="text" value={pass} readOnly />
      <button onClick={genPass}>Generate</button>
      <br />
      <input
        type="range"
        value={length}
        min={8}
        max={16}
        onChange={(e) => setLength(e.target.value)}
      />
      <label>Length: {length}</label>
      <br />
      <label>Number</label>
      <input
        type="checkbox"
        checked={includeNumbers}
        onChange={(e) => setIncludeNumbers(e.target.checked)}
      />
      <label>Character</label>
      <input
        type="checkbox"
        checked={includeCharacters}
        onChange={(e) => setIncludeCharacters(e.target.checked)}
      />
      <label>Symbol</label>
      <input
        type="checkbox"
        checked={includeSymbols}
        onChange={(e) => setIncludeSymbols(e.target.checked)}
      />
    </>
  );
}

export default App;
