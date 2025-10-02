import Factorial from './components/Factorial';
import Calculator from './components/Calculator';
import OperationCalculator from './components/OperationCalculator';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Interactive Math App</h1>
      <Factorial />
      <Calculator />
      <OperationCalculator />
    </div>
  );
}

export default App;
