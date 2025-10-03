import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggler;
