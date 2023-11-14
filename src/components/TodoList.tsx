import React, { useState, useEffect } from "react";
import TodoItem from "./ToDoItem";
import TodoForm from "./TodoForm";
import SearchBar from "./SearchBar";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 20)))
      .catch((error) => console.error(error));
  }, []);

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, updatedTodo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="p-4 rounded border border-2"
      style={{ backgroundColor: "#62929E" }}
    >
      <div className="p-3">
        <SearchBar onSearch={handleSearch} />
        <TodoForm onSave={handleAddTodo} />
      </div>
      {filteredTodos.slice(0, 20).map((todo) => (
        <div className="container p-1">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: "#FDFDFF" }}
              >
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDeleteTodo}
                  onEdit={handleEditTodo}
                />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
