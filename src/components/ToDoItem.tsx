import React, { useState } from "react";
import EditButton from "./Editbutton";
import TodoForm from "./TodoForm";
import { Fragment } from "react";

interface TodoItemProps {
  todo: any;
  onDelete: (id: number) => void;
  onEdit: (id: number, updatedTodo: any) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (updatedTodo: any) => {
    onEdit(todo.id, updatedTodo);
    setIsEditing(false);
  };

  return (
    <div className=" p-2 row ">
      {isEditing ? (
        <TodoForm initialTitle={todo.title} onSave={handleSaveEdit} />
      ) : (
        <>
          <div className="col-md-5 p-1 justify-content-start">
            <span>{todo.title}</span>
          </div>
          <div className="col-md-5 ms-auto  d-flex justify-content-center">
            <EditButton onClick={handleEdit} />
            <Fragment>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </Fragment>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
