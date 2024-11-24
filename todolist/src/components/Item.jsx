import React from "react";
import iconDelete from "../assets/icons8-rimuovere-30.png";
import iconDone from "../assets/icons8-fatto-30.png";
import iconNotDone from "../assets/icons8-dafare-30.png";
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
    // <li>
    //   <span className="delete" onClick={handleDelete}>
    //     X
    //   </span>
    //   <span>{item.value}</span>
    //   <span className={item.doit ? "fatto" : "dafare"} onClick={handleDoIt}>
    //     {item.doit ? "fatto" : "da fare"}
    //   </span>
    // </li>
    <li>
      <span>{item.value}</span>
      <span onClick={handleDoIt}>
        {!item.doit && <img src={iconNotDone} alt="da fare" />}
        {item.doit && <img src={iconDone} alt="fatto" />}
      </span>
      <img src={iconDelete} alt="cestino cancella" />
    </li>
  );
};
