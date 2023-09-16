import React from "react";

const Todo = ({ todo, removeTodos, completeTodo }) => {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <div className="content">
          <p>{todo.text}</p>
          <p>({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            Completar
          </button>
          <button className="remove" onClick={() => removeTodos(todo.id)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
