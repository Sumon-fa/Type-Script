import React from "react";
import Todo from "../Model/Models";
import TodoItems from "./TodoItems";
import classes from "./Todo.module.css";

const Todos: React.FC<{
  items: Todo[];
  onRemoveHandler: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          onRemove={props.onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
