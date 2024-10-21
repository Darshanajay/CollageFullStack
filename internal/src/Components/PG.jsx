import React from "react";
import { useState } from "react";

const PG = () => {
  const [password, setPassword] = useState("");
  const generatePassword = (length) => {
    const char =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * char.length); /// Math.floor(Math.random() * 8)
      generatedPassword += char[randomIndex];
    }
    setPassword(generatedPassword);
  };
  return (
    <div>
      <h1>Password Generator</h1>
      <button
        onClick={() => generatePassword(8)}
      >
        Generate Password
      </button>
      {password && (
        <div>
          <h3>Generated Password:</h3>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PG;
