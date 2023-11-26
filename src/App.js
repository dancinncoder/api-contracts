import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchingDataByAxios = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => {
          setTodos([...response.data]);
        })
        .catch((error) => alert("error!!"));
    };
    fetchingDataByAxios();
  }, []);

  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <h3>Title: {item.title}</h3>
            <p>Id: {item.id}</p>
            <p>Completed: {String(item.completed)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
