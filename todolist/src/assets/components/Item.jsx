import React from "react";


export const Item = ({item, todolist, setTodolist}) => {
  // setta le to do sul do it
  const handleDoIt=()=>{
    setTodolist(todolist.map((el)=>{
          if(el.id==item.id){
            return {...el, doit: !item.doit}
      }
          return el
        }))
  }
    return (
        <li>
        <span className="delete">M</span>
        <span>{item.value}</span>
        <span
          className={item.doit ? "fatto" : "dafare"} onClick={handleDoIt}
        >
          {item.doit ? "fatto" : "da fare"}
        </span>
      </li>
    )
}