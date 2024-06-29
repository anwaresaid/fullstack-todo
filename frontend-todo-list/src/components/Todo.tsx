import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";

import React from "react";
import { removeTodo, toggleComplete } from "../store/todolist/todoSlicer.ts";
import { del, update } from "../service/apiService.ts";

function Todo({ todo, fetchData }) {
  const dispatch = useDispatch();
  function handleCheckboxClick() {
    update(`http://localhost:3000/todo/${todo.id}`, {
      ...todo,
      done: !todo.done,
    }).then((response) => {
      fetchData();
    });
  }

  function handleRemoveClick() {
    del(`http://localhost:3000/todo/${todo.id}`).then((response) => {
      fetchData();
    });
    dispatch(removeTodo(todo.id));
  }

  return (
    <ListItem style={{ display: "flex" }} className="list-item">
      <Checkbox
        checked={todo.done}
        onClick={handleCheckboxClick}
        style={{ color: "white" }}
        className="checkbox"
      />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.done ? "line-through" : null,
        }}
      >
        <div className="list-text">
          <b> {todo.title}</b>
          <p>{todo.description && todo.description}</p>
        </div>
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon style={{ color: "white" }} className="icon" />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
