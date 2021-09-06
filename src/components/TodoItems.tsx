import React from "react";
import classes from "./TodoItems.module.css";

const TodoItems: React.FC<{ text: string; onRemove: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemove}>
      {props.text}
    </li>
  );
};
export default TodoItems;
