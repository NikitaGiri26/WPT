import React, { useState } from 'react';
import GraduateComponent from './components/GraduateComponent';
import PGComponent from './components/PGComponent';
import UnderGradComponent from './components/UnderGradComponent';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [educationLevel, setEducationLevel] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Details Form</h2>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      /><br /><br />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      /><br /><br />

      <label>Education Level:</label>
      <select
        value={educationLevel}
        onChange={(e) => setEducationLevel(e.target.value)}
      >
        <option value="">--Select--</option>
        <option value="Graduate">Graduate</option>
        <option value="PG">PG</option>
        <option value="UnderGrad">UnderGrad</option>
      </select>

      <hr />

      {/* Conditional Rendering */}
      {educationLevel === 'Graduate' && <GraduateComponent />}
      {educationLevel === 'PG' && <PGComponent />}
      {educationLevel === 'UnderGrad' && <UnderGradComponent />}
    </div>
  );
};

export default App;
