import React, { useState } from 'react';

const GraduateComponent = () => {
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');
  const [score, setScore] = useState('');
  const [univ, setUniv] = useState('');

  return (
    <div>
      <h3>Graduate Details</h3>
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Final Year Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="University"
        value={univ}
        onChange={(e) => setUniv(e.target.value)}
      />
    </div>
  );
};

export default GraduateComponent;
