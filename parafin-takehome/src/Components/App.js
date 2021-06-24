import { useState } from 'react';
import './App.css';

function App() {
  const [amount, updateAmount] = useState('');
  const [check, updateCheck] = useState('');

  const textFieldChange = (e) => {
    var character = parseInt(e.target.value);

    console.log('parsed', character)
    updateAmount(Math.round(character * 100 / 100).toLocaleString());
    console.log('amount', amount)
  }

  return (
    <div className="App">
      <span className="inputSymbol">
        <input className="amountInput" type="text" value={amount} onChange={textFieldChange} maxlength="6"></input>
      </span>
      {
        (amount > 30000 || amount < 10000 && amount > 0) &&
        <div className="errorMessageContainer">
          <span className="errorMessage">Please enter an amount between $10,000 and $30,000</span>
        </div>
      }
      <div style={{"display": "flex", "flex-wrap": "wrap", "flex-direction": "column"}}>
        <input className="rangeSlider" type="range" min="10000" max="30000" value={amount} onChange={e => updateAmount(e.target.value)} step="2000" ></input>
        <div style={{"display": "flex", "color": "gray", "font-size": "12px"}}>
          <span> $10,000</span>
          <span style={{"display": "flex", "margin-left": "auto"}}>$30,000</span>
        </div>
      </div>
    </div>
  );
}

export default App;
