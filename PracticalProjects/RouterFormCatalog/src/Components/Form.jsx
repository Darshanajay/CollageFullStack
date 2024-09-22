import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submit, setSubmit] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      setSubmit(true);
      {
        localStorage.setItem("name", name);
      }
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  const message = () => {
    if (submit) {
      return (
        <div>User {localStorage.getItem("name")} submitted successfully</div>
      );
    }
  };

  return (
    <>
      <div className="App">
        <h1>
          <center>Registration Page</center>
        </h1>
        <div className="msg">{message()}</div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Enter your name:</label>
            <br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleName}
              className=" border"
            />
            <br />
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
              className="border"
            />
            <br />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input
              type="text"
              id="password"
              value={password}
              onChange={handlePassword}
              className="border"
            />
            <br />

            <button className="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;
