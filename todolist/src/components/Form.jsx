export const Form = ({
  setInputValue,
  inputValue,
  setIdTodo,
  idtodo,
  setTodolist,
  todolist,
}) => {
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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={inputValue} />
      <input type="submit" value="Aggiungi" />
    </form>
  );
};
