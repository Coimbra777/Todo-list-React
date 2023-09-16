import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

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

  // função cria um novo array com id aleatório
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  // função para remover todos
  const removeTodos = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodos={removeTodos} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
