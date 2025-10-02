import React, { useState } from 'react';

const PGComponent = () => {
  const [year, setYear] = useState('');
  const [thesis, setThesis] = useState('');

  return (
    <div>
      <h3>Postgraduate Details</h3>
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Thesis Subject"
        value={thesis}
        onChange={(e) => setThesis(e.target.value)}
      />
    </div>
  );
};

export default PGComponent;
