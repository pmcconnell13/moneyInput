import { useState } from 'react';
import './App.css';

function App() {
  const [amount, updateAmount] = useState('');

  const textFieldChange = (e) => {
    var character = e.target.value;
    updateAmount(character)
  }
  //.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div className="App">
      <span className="inputSymbol">
        <input className="amountInput" type="text" value={amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} onChange={textFieldChange} maxlength="6"></input>
      </span>
      {
        (amount > 30000 || amount < 10000 && amount > 0) &&
        <div className="errorMessageContainer">
          <span className="errorMessage">Please enter an amount between $10,000 and $30,000</span>
        </div>
      }
      <div>
        <input className="rangeSlider" type="range" min="10000" max="30000" value={amount} onChange={e => updateAmount(e.target.value)} step="2000" ></input>
      </div>
    </div>
  );
}

export default App;
