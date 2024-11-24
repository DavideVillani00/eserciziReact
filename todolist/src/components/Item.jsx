import React from "react";

export const Item = ({ item, todolist, setTodolist }) => {
  // setta le to do sul do it
  const handleDoIt = () => {
    setTodolist(
      todolist.map((el) => {
        if (el.id == item.id) {
          return { ...el, doit: !item.doit };
        }
        return el;
      })
    );
  };
  /* non funziona */
  const handleDelete = () => {
    setTodolist(
      todolist.filter((el) => {
        return el.id !== item.id;
      })
    );
  };
  return (
    <li>
      <span className="delete" onClick={handleDelete}>
        X
      </span>
      <span>{item.value}</span>
      <span className={item.doit ? "fatto" : "dafare"} onClick={handleDoIt}>
        {item.doit ? "fatto" : "da fare"}
      </span>
    </li>
  );
};
