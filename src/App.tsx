import { useState } from 'react';
import './App.css';

function App() {
  const [monthlyPayment,setMonthlyPayment] = useState<number>()
  return (
    <div className="App">
      <header className="App-header">
        Mortgage Calculator
      </header>
      <div className='form-container'>
        <label>Enter Principal amount:
        <input className="principal-input" name="principal-input" type="number" />
        </label>
        <label>Enter interest rate:
          <input className="interest-input" name="interest-input" />
        </label>
        <label>Length of loan:
          <input className='loan-input' name="loan-input"/>
        </label>
        <div>
        <input type="button" value="Calculate" />
        </div>
        <div>
          <p>Your monthly mortgage payment will be <span>{monthlyPayment}</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
