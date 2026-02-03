import React, { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  // State to store the generated random string
  const [randomString, setRandomString] = useState('');
  
  // State to store the length of the string
  const [length, setLength] = useState(10);
  
  // State to track if string should include numbers
  const [includeNumbers, setIncludeNumbers] = useState(true);
  
  // State to track if string should include special characters
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  
  // State to track if string should include uppercase letters
  const [includeUppercase, setIncludeUppercase] = useState(true);
  
  // State to track if string should include lowercase letters
  const [includeLowercase, setIncludeLowercase] = useState(true);

  // useCallback to generate random string - memoized to prevent unnecessary re-renders
  const generateRandomString = useCallback(() => {
    let characters = '';
    let result = '';
    
    // Build character set based on selected options
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSpecialChars) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // If no character type is selected, use lowercase by default
    if (characters === '') {
      characters = 'abcdefghijklmnopqrstuvwxyz';
    }
    
    // Generate random string
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    setRandomString(result);
  }, [length, includeNumbers, includeSpecialChars, includeUppercase, includeLowercase]);

  // useEffect to generate initial random string when component mounts
  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  // Function to copy string to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(randomString);
    alert('Copied to clipboard!');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Random String Generator</h1>
        <p className="subtitle">Generate secure random strings with custom options</p>
        
        <div className="output-section">
          <div className="random-string-display">
            {randomString || 'Click Generate to create a random string'}
          </div>
          <button className="copy-btn" onClick={copyToClipboard} disabled={!randomString}>
            📋 Copy
          </button>
        </div>

        <div className="controls">
          <div className="length-control">
            <label htmlFor="length">
              Length: <span className="length-value">{length}</span>
            </label>
            <input
              type="range"
              id="length"
              min="4"
              max="50"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>

          <div className="options">
            <h3>Include:</h3>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                />
                <span>Lowercase (a-z)</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                <span>Uppercase (A-Z)</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
                <span>Numbers (0-9)</span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={includeSpecialChars}
                  onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                />
                <span>Special Characters (!@#$%)</span>
              </label>
            </div>
          </div>

          <button className="generate-btn" onClick={generateRandomString}>
            🔄 Generate Random String
          </button>
        </div>

        <div className="info">
          <h3>React Hooks Used:</h3>
          <ul>
            <li><strong>useState:</strong> Managing component state (string, length, options)</li>
            <li><strong>useCallback:</strong> Memoizing the generateRandomString function</li>
            <li><strong>useEffect:</strong> Generating initial string on component mount</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
