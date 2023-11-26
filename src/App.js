import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos([...json]);
      })
      .catch((error) => alert("landing error!"));
  }, []);

  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <h2>Title: {item.title}</h2>
            <p>Id: {item.id}</p>
            <p>Completed: {String(item.completed)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
