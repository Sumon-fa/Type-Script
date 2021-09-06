import React from "react";
import Todos from "./components/Todos";
import Todo from "./Model/Models";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

const App = () => {
  //const todos = [new Todo("Learn react"), new Todo("Learn typescript")];
  const [todos, setTodos] = useState<Todo[]>([]);
  function addToHandler(todoText: string) {
    const newTodos = new Todo(todoText);
    setTodos((prevTodo) => {
      return [...prevTodo, newTodos];
    });
  }
  function removeHandler(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={addToHandler} />
      <Todos items={todos} onRemoveHandler={removeHandler} />
    </div>
  );
};

export default App;
