import { useEffect, useState } from "react";
import "./App.css";

// API contracts practice using Fetch
// 1. fetch().then.then
// 2. + add catch() for the case for an error
// 3. showing fetched data to screen using useState
// 4. connect json data to data state
// 5. Add useEffect for stopping infinite re-rendering

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
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
