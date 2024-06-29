import { List } from "@mui/material";
import React from "react";
import Todo from "./Todo.tsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store.ts";
import { get } from "../service/apiService.ts";

function TodoList(props) {
  const storeList = useSelector((state: RootState) => state.list.list);
  const todoList = props.todos ? props.todos : storeList;
  return (
    <div className="list-container">
      <List className="todo-list">
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} fetchData={props.fetchData} />
        ))}
      </List>
    </div>
  );
}

export default TodoList;
