import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item";
import { PageManager } from "./components/PageManager";

function App() {
  // useState
  // formattazione elemento todo
  const [idtodo, setIdTodo] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [todolist, setTodolist] = useState([]);
  // impostazione pagina e todo per pagina
  const [numberForPage, setNumberForPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // variabili
  // indici primo ed ultimo todo per pagina
  const indexOfLastElement = currentPage * numberForPage;
  const indexOfFirstElement = indexOfLastElement - numberForPage;

  // funzioni handle
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
    // html
    <>
      <h1>To Do List</h1>
      <table>
        <tbody>
          {todolist
            .slice(indexOfFirstElement, indexOfLastElement)
            .map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  todolist={todolist}
                  setTodolist={setTodolist}
                />
              );
            })}
        </tbody>
      </table>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
        <input type="submit" value="Aggiungi" />
      </form>

      <PageManager
        todolist={todolist}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberForPage={numberForPage}
        setNumberForPage={setNumberForPage}
      />
    </>
  );
}

export default App;
