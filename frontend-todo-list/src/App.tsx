import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";
import { get } from "./service/apiService.ts";

const LOCAL_STORAGE_KEY = "todo-list";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await get("http://localhost:3000/todo");
      console.log("response", response);
      setTodos(response);
      localStorage.setItem("todos", JSON.stringify(response));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);
  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h2" className="title">
        React Todo
      </Typography>
      <TodoForm fetchData={fetchData} />
      <TodoList todos={todos} fetchData={fetchData} />
    </div>
  );
}

export default App;
