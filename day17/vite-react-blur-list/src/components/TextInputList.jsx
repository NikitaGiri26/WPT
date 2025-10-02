import { useState } from 'react';

function TextInputList() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleBlur = () => {
    if (inputValue.trim()) {
      const items = inputValue.split(',').map(item => item.trim());
      setListItems(items);
    }
  };

  return (
    <div>
      <h2>Enter comma-separated items:</h2>
      <input
        type="text"
        placeholder="e.g. Apple, Banana, Mango"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
      />
      {listItems.length > 0 && (
        <ol>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default TextInputList;
