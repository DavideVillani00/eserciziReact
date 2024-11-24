import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item";

function App() {
  const [idtodo, setIdTodo] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [todolist, setTodolist] = useState([]);
  // aggiornamento al cambio di input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // aggiornamento all'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue != "") {
      setIdTodo(Number(idtodo + 1));
      setTodolist([
        ...todolist,
        { id: idtodo, value: inputValue, doit: false },
      ]);
      setInputValue("");
    }
  };

  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {todolist.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              todolist={todolist}
              setTodolist={setTodolist}
            />
          );
        })}
      </ul>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
        <input type="submit" value="Aggiungi" />
      </form>
    </>
  );
}

export default App;
