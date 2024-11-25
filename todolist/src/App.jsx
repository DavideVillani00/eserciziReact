import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item";
import { PageManager } from "./components/PageManager";
import { Form } from "./components/Form";

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

  return (
    // html
    <main>
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
      <Form
        setInputValue={setInputValue}
        inputValue={inputValue}
        setIdTodo={setIdTodo}
        idtodo={idtodo}
        setTodolist={setTodolist}
        todolist={todolist}
      />

      <PageManager
        todolist={todolist}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberForPage={numberForPage}
        setNumberForPage={setNumberForPage}
      />
    </main>
  );
}

export default App;
