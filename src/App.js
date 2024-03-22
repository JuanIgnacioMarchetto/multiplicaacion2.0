import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [crossings, setCrossings] = useState(0);

  useEffect(() => {
    const countCrossings = () => {
      if (num1 && num2) {
        const n1 = parseInt(num1);
        const n2 = parseInt(num2);

        setCrossings(n1 * n2);
      }
    };

    countCrossings();
  }, [num1, num2]);

  return (
    <div className="App">
      <h1>Multiplicación con líneas</h1>
      <input
        type="number"
        placeholder="Ingrese el primer número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ingrese el segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <p>Número de cruces: {crossings}</p>
      <div className="container">
        <div className="horizontal-container">
          {Array.from({ length: parseInt(num1) }, (_, i) => (
            <div key={i} className="horizontal-line"></div>
          ))}
        </div>
        <div className="vertical-container">
          {Array.from({ length: parseInt(num2) }, (_, i) => (
            <div key={i} className="vertical-line"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
