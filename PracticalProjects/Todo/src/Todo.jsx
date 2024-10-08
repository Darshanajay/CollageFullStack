import React, { useState } from "react";
import "./App.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="ToDo">
      <div className="Main">
        <h1> To-Do List </h1>
        <div className="todocont">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a task"
          />

          <button onClick={handleAddTodo}> Add </button>
        </div>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDeleteTodo(index)}> Delete </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default Todo;
