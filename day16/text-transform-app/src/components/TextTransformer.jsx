import React, { useState } from 'react';

function TextTransformer() {
  const [inputText, setInputText] = useState('');
  const [transformType, setTransformType] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTransform = (type) => {
    setTransformType(type);
    let transformed = inputText;

    if (type === 'uppercase') {
      transformed = inputText.toUpperCase();
    } else if (type === 'lowercase') {
      transformed = inputText.toLowerCase();
    } else if (type === 'titlecase') {
      transformed = inputText
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    setOutputText(transformed);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your text here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input
            type="radio"
            name="transform"
            value="uppercase"
            checked={transformType === 'uppercase'}
            onChange={() => handleTransform('uppercase')}
          />
          Uppercase
        </label>{' '}
        <label>
          <input
            type="radio"
            name="transform"
            value="lowercase"
            checked={transformType === 'lowercase'}
            onChange={() => handleTransform('lowercase')}
          />
          Lowercase
        </label>{' '}
        <label>
          <input
            type="radio"
            name="transform"
            value="titlecase"
            checked={transformType === 'titlecase'}
            onChange={() => handleTransform('titlecase')}
          />
          Title Case
        </label>
      </div>

      <div>
        <strong>Transformed Output:</strong>
        <p style={{ marginTop: '0.5rem', background: '#f0f0f0', padding: '1rem' }}>
          {outputText}
        </p>
      </div>
    </div>
  );
}

export default TextTransformer;
