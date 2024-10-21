import { Data } from "./Components/EmployeeData";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [EmpName, setEmpName] = useState("");
  const [EmpAge, setEmpAge] = useState(0);
  const [EmpEmail, setEmpEmail] = useState("");
  const [EmpPhone, setEmpPhone] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    setData(Data);
    console.log(Data.length + 1)
  },[]);

  const handleDlete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newObj = {
      id: Data.length + 1,
      EmpName: EmpName,
      EmpAge: EmpAge,
      EmpEmail: EmpEmail,
      EmpPhone: EmpPhone,
    };
    const dt = [...Data, newObj];
    Data.push(newObj)
    setData(dt);
  };
  const handleClear = () => {
    setId(0);
    setEmpName("");
    setEmpAge(0);
    setEmpEmail("");
    setEmpPhone("");
  };

  return (
    <>
      <h1>Employee Details</h1>
      <hr />
      <div className="inputContainer">
        <label htmlFor="name">Employee Name: </label>
        <input
          type="text"
          placeholder="Enter Employe Name"
          id="name"
          onChange={(e) => setEmpName(e.target.value)}
          value={EmpName}
        />
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          placeholder="Enter Employe Age"
          id="age"
          onChange={(e) => setEmpAge(e.target.value)}
          value={EmpAge}
        />
        <label htmlFor="salary">Email: </label>
        <input
          type="text"
          placeholder="Enter Employe Email"
          id="email"
          onChange={(e) => setEmpEmail(e.target.value)}
          value={EmpEmail}
        />
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          placeholder="Enter Employe Phone"
          id="phone"
          onChange={(e) => setEmpPhone(e.target.value)}
          value={EmpPhone}
        />
        <button className="btn" id="btn-blue" onClick={(e) => handleSave(e)}>
          Add Employee
        </button>
        <button className="btn" onClick={() => handleClear()}>
          Clear
        </button>
      </div>
      <br />
      <hr />
      <table border="2px">
        <thead>
          <tr>
            <td>Id</td>
            <td>EmpName</td>
            <td>Age</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.EmpName}</td>
                <td>{item.EmpAge}</td>
                <td>{item.EmpEmail}</td>
                <td>{item.EmpPhone}</td>
                <td>
                  <button className="btn" onClick={() => handleDlete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
