import { useState } from 'react'
import './App.css'

function App() {

  const [todolist, setTodolist] = useState([]);
  const [todoinput, setTodoinput] = useState("");

function getInput(e){
  setTodoinput(e.target.value);
 
}

function saveTodo(){
setTodolist([...todolist, todoinput]);
console.log(todolist)
}
  return (
    <>
    <h1>To Do List</h1>
    <ul>
      
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
    <input type="text" onChange={getInput}/>
    <input type="button" value="Aggiungi" onClick={saveTodo}/>
    </>
  )
}

export default App
