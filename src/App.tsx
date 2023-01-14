import { useState } from 'react';
import './App.css';

function App() {
  const [monthlyPayment,setMonthlyPayment] = useState<number | null>(null)
  const [principalAmount, setPrincipalAmount] = useState<number |null>(null)
  const [interestRate, setInterestRate] = useState<number | null>(null)
  const [term, setTerm] = useState<number | null>(null)

  function handleCalculate(){
    if(principalAmount !== null && interestRate !== null && term!==null){
      let paymentCount = term * 12
      let actualInterest = (interestRate/100)/12
      let calculate = principalAmount * (
        (actualInterest * ((1 + actualInterest)**paymentCount))/
        (((1+actualInterest)**paymentCount)-1)
        )
        let payment = Math.round(calculate*100)/100
      setMonthlyPayment(payment)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        Mortgage Calculator
      </header>
      <div className='form-container'>
        <label className='input-labels'>Enter Principal amount $
        <input 
          className="principal-input" 
          onChange={(event) => setPrincipalAmount(parseInt(event.target.value))} 
          name="principal-input" 
          type="number" />
        </label>
        <label className='input-labels'>Enter interest rate %
          <input 
            className="interest-input" 
            onChange={event => setInterestRate(parseInt(event.target.value))} 
            name="interest-input" 
            type="number"/>
            
        </label>
        <label className='input-labels'>Length of loan in Years
          <input 
            className='loan-input' 
            onChange={event => setTerm(parseInt(event.target.value))} 
            name="loan-input" 
            type="number"/>
            
        </label>
        <div>
        <input 
          type="button" 
          onClick={handleCalculate} 
          value="Calculate" />
        </div>
        <div>
          <p>Your monthly mortgage payment will be <span>{monthlyPayment}</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
