import React, { useState } from 'react';
import './style.css';

type Props = {
  todo: { name: string; key: string };
  handleRemove: (key: string) => void;
  handleUpdateSubmit: (content: string, key: string) => void;
};
const TodoItem = ({ todo, handleRemove, handleUpdateSubmit }: Props) => {
  const [content, setContent] = useState(todo.name);

  const handleUpdateChange = (event) => {
    setContent(event.target.value);
  };
  const handleUndoChanges = () => {
    setContent(todo.name);
  };
  console.log(`render TodoItem ${todo.key}`);
  return (
    <div style={{ marginBottom: 5, display: 'flex', gap: 5 }}>
      <input id={todo.key} value={content} onChange={handleUpdateChange} />
      <button className="todo-btns" onClick={() => handleRemove(todo.key)}>
        Delete
      </button>
      <button className="todo-btns" onClick={handleUndoChanges}>
        Cancel
      </button>
      <button
        className="todo-btns"
        onClick={() => handleUpdateSubmit(content, todo.key)}
      >
        Update
      </button>
    </div>
  );
};

export default React.memo(TodoItem);
