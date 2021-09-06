import React from "react";
import { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText!.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
    todoTextInputRef.current!.value = "";
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">ToDo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add ToDo</button>
    </form>
  );
};
export default NewTodo;
