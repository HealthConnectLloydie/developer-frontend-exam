import React, { useState, useEffect } from "react";

const ButtonStyle = {
  width: "100px",
};

interface TodoFormProps {
  initialTitle?: string;
  onSave: (updatedTodo: any) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ initialTitle = "", onSave }) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  const handleSave = () => {
    onSave({ title, completed: false });
    // Clear the input after saving
    setTitle("");
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new record"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-success"
        style={ButtonStyle}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default TodoForm;
