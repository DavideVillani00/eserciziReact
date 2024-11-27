import { useContext } from "react";
import "./App.css";
import { Item } from "./components/Item";
import { PageManager } from "./components/PageManager";
import { Form } from "./components/Form";
import { myContext } from "./utilities/Provider";

function App() {
  const { indexOfFirstElement, indexOfLastElement, todolist } =
    useContext(myContext);

  return (
    // html
    <main>
      <h1>To Do List</h1>
      <table>
        <tbody>
          {todolist
            .slice(indexOfFirstElement, indexOfLastElement)
            .map((item) => {
              return <Item key={item.id} item={item} />;
            })}
        </tbody>
      </table>
      <Form />

      <PageManager />
    </main>
  );
}

export default App;
