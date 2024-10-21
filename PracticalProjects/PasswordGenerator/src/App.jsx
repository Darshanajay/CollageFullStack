import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const generatePassword = (length) => { 
    const char ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * char.length); /// Math.floor(Math.random() * 8)
      generatedPassword += char[randIndex];
    }
    setPassword(generatedPassword)
   }
  

  return (
    <div className='App'>
      <div>
      <h1>Password Generator</h1>
      <button onClick={() => generatePassword(14)}>
        Generate Password
      </button>

      {password && (
        <div>
          <h3>Generated Password:</h3>
          <p>{password}</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default App
