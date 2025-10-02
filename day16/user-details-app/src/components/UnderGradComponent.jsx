import React, { useState } from 'react';

const UnderGradComponent = () => {
  const [ssc, setSSC] = useState('');
  const [hsc, setHSC] = useState('');

  return (
    <div>
      <h3>Undergraduate Details</h3>
      <input
        type="text"
        placeholder="SSC Score"
        value={ssc}
        onChange={(e) => setSSC(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="HSC Score"
        value={hsc}
        onChange={(e) => setHSC(e.target.value)}
      />
    </div>
  );
};

export default UnderGradComponent;
