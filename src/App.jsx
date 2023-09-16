import { useState } from "react";
import Todo from "./components/Todo";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidades",
      categody: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      categody: "Pessoal",

      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      categody: "Pessoal",

      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
