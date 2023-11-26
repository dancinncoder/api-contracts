import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      // response에는 data라는 key가 있다. 이 key에 접근해야 배열데이터를 얻을 수 있다.
      .then((response) => {
        console.log("data", response.data);
        setTodos(response.data);
      })
      .catch((error) => alert("error!!"));
  }, []);

  return (
    <div>
      {todos.map((item) => {
        return (
          <>
            <h3>Title: {item.title}</h3>
            <p>Id: {item.id}</p>
            <p>Completed: {String(item.completed)}</p>
          </>
        );
      })}
    </div>
  );
}

export default App;
