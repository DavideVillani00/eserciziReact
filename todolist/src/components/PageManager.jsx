import "./styleComponents/PageManager.css";

export const PageManager = ({
  // prop
  todolist,
  currentPage,
  numberForPage,
  setNumberForPage,
  setCurrentPage,
}) => {
  // creazione di un nuovo array che indica il numero di pagine totali
  const pageNumbers = Array.from(
    {
      length: Math.ceil(todolist.length / numberForPage),
    },
    (_, i) => {
      return i + 1;
    }
  );

  //   funzioni handle
  // scelta di n todo per pagina
  const handleNumberForPage = (e) => {
    setNumberForPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // pagina precedente
  const handleDecreases = () => {
    setCurrentPage((current) => {
      return current - 1;
    });
  };
  //   pagina successiva
  const handleIncreases = () => {
    setCurrentPage((current) => {
      return current + 1;
    });
  };

  return (
    // elementi html
    <div>
      <div id="setPage">
        <label htmlFor="numberForPage">to do per pagina: </label>
        <select
          name="numberForPage"
          id="numberForPage"
          value={numberForPage}
          onChange={handleNumberForPage}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
        <p>di {todolist.length}</p>
      </div>
      <div id="page">
        {currentPage > 1 && <button onClick={handleDecreases}>-</button>}
        <p>{currentPage}</p>
        {pageNumbers.length > 1 && currentPage < pageNumbers.length && (
          <button onClick={handleIncreases}>+</button>
        )}
      </div>
    </div>
  );
};
