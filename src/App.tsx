import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#FDFDFF" }}>
      <nav className="navbar mb-3" style={{ backgroundColor: "#393D3F" }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 " style={{ color: "#FDFDFF" }}>
            Developer Exam
          </span>
        </div>
      </nav>
      <div className="h-50 d-flex justify-content-center">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
