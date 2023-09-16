import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <div className="todo">
        <div className="content">
          <p>{todo.text}</p>
        </div>
        <div>
          <button>Completar</button>
          <button>x</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
