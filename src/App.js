import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchingDataByAxios = async () => {
      setIsLoading(true); // Loading...
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setIsLoading(false); // Loading disppeared
      setTodos([...response.data]);
    };
    fetchingDataByAxios();
  }, []);

  // if (isLoading) {
  //   return <h1>Loading....!</h1>;
  // }

  return (
    <div>
      {isLoading === false &&
        todos.map((item) => {
          return (
            <div key={item.id}>
              <h3>Title: {item.title}</h3>
              <p>Id: {item.id}</p>
              <p>Completed: {String(item.completed)}</p>
            </div>
          );
        })}
      {isLoading === true && <p>Loading...</p>}
    </div>
  );
}

export default App;
