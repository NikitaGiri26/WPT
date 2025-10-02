// src/components/PasswordGenerator.jsx
import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const allChars = upper + lower + numbers + symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>🔐 Random Password Generator</h2>
      <label>
        Password Length:
        <input
          type="number"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <br /><br />
      <button onClick={generatePassword}>Generate Password</button>
      <br /><br />
      {password && (
        <div>
          <strong>Generated Password:</strong>
          <p style={{ fontSize: '1.2rem', wordBreak: 'break-word' }}>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
