import { useState } from "react";
import "./App.css";

function App() {
  const [idtodo, setIdTodo] = useState("0");
  const [inputValue, setInputValue] = useState("");
  const [todolist, setTodolist] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIdTodo(Number(idtodo) + 1);
    setTodolist([...todolist, { id: idtodo, value: inputValue, doit: false }]);
    console.log(todolist);
  };
  const handleChangeDoIt = (id) => {
    setTodolist(
      todolist.map((todo) => {
        if (todo.id == id) {
          return { doit: true, ...todo };
        }
      })
    );
  };
  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {todolist.map(({ value, doit, id }) => {
          return (
            <li>
              <span className="delete">X</span>
              <span>{value}</span>
              {/* <span style={doit ? { color: green } : { color: red }}>
                {doit ? "fatto" : "da fare"}
              </span> */}
              {/* {doit ? (
                <span className="fatto">fatto</span>
              ) : (
                <span className="dafare">da fare</span>
              )} */}
              <span
                onClick={handleChangeDoIt(id)}
                className={doit ? "fatto" : "dafare"}
              >
                {doit ? "fatto" : "da fare"}
              </span>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Aggiungi" />
      </form>
    </>
  );
}

export default App;
