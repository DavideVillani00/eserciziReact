import { createContext, useEffect, useState } from "react";

export const myContext = createContext();
export const Provider = ({ children }) => {
  // useState
  // formattazione elemento todo
  const [idtodo, setIdTodo] = useState(
    localStorage.getItem("idtodo") ? localStorage.getItem("idtodo") : 0
  );
  const [inputValue, setInputValue] = useState("");
  const [todolist, setTodolist] = useState(
    localStorage.getItem("todolist")
      ? JSON.parse(localStorage.getItem("todolist"))
      : []
  );
  // impostazione pagina e todo per pagina
  const [numberForPage, setNumberForPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // variabili
  // indici primo ed ultimo todo per pagina
  const indexOfLastElement = currentPage * numberForPage;
  const indexOfFirstElement = indexOfLastElement - numberForPage;

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
    localStorage.setItem("idtodo", idtodo);
  }, [todolist]);

  return (
    <myContext.Provider
      value={{
        idtodo,
        setIdTodo,
        inputValue,
        setInputValue,
        todolist,
        setTodolist,
        numberForPage,
        setNumberForPage,
        currentPage,
        setCurrentPage,
        indexOfFirstElement,
        indexOfLastElement,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
