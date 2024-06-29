import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todolist/todoSlicer.ts";
import { post } from "../service/apiService.ts";

function TodoForm(props) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    done: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, title: e.target.value });
  }
  function handleDescriptionInputChange(e) {
    setTodo({ ...todo, description: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    post("http://localhost:3000/todo", todo).then((response) => {
      props.fetchData();
    });
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="fieldsContainer">
        <TextField
          label="Task"
          type="text"
          name="title"
          className="task-input"
          value={todo.title}
          onChange={handleTaskInputChange}
        />
        <TextField
          label="Description"
          type="text"
          name="description"
          value={todo.description}
          onChange={handleDescriptionInputChange}
        />
      </div>
      <Button variant="outlined" type="submit" className="submit-btn">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
