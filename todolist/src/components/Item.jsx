import React from "react";
import "../App.css";
import iconDelete from "../assets/icons8-cestino-25.png";
import iconDone from "../assets/icons8-fatto-25.png";
import iconNotDone from "../assets/icons8-daFare-25.png";
export const Item = ({ item, todolist, setTodolist }) => {
  // cambia il fatto o da fare
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
  // elimina l'elemento
  const handleDelete = () => {
    setTodolist(
      todolist.filter((el) => {
        return el.id !== item.id;
      })
    );
  };
  return (
    <tr>
      <td>{item.value}</td>
      <td onClick={handleDoIt}>
        {!item.doit && <img src={iconNotDone} alt="da fare" />}
        {item.doit && <img src={iconDone} alt="fatto" />}
      </td>
      <td onClick={handleDelete}>
        <img src={iconDelete} alt="cestino cancella" />
      </td>
    </tr>
  );
};
