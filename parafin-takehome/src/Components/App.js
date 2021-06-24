import { useState } from 'react';
import './App.css';

function App() {
  const [amount, updateAmount] = useState('');
  const [check, updateCheck] = useState('');

  const textFieldChange = (e) => {
    var character = e.target.value;
    var commaAmount = Math.round((amount * 100) / 100).toLocaleString()
    var stringAmount = amount.toString();
    // if (stringAmount.length <= 3) {
    //   updateAmount(character)
    // } else if (stringAmount.length === 4) {
    //   var firstComma = stringAmount.split('').splice(1, 0, ',').join('')
    //   console.log('hi', firstComma)
    //   updateAmount(character)
    // }
    console.log(Number(character))
    if (Number(character)) {
      updateAmount(character)
    }
    // if (stringAmount.length <= 4) {
    //   updateAmount(character)
    //   if (stringAmount.length === 4) {
    //     updateCheck(amount);
    //     updateAmount(commaAmount)
    //   }
    // }
    // if (stringAmount.length === 5) {
    //   console.log('hiii')
    //   var newAmount = Math.round((check * 100) / 100).toLocaleString();
    //   updateAmount(newAmount)
    // }
    console.log('amount', check)
  }

  return (
    <div className="App">
      <span className="inputSymbol">
        <input className="amountInput" type="text" value={Math.round((amount * 100) / 100).toLocaleString()} onChange={textFieldChange} maxlength="7"></input>
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
