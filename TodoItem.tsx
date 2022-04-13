import React, { useState } from 'react';
import {} from './TodoList';

export const getRandomKey = () => {
  return (Math.random() + 1).toString(36).substring(7);
};
type Props = {
  todo: { name: string; key: string };
  handleEditChange: () => void;
  handleRemove: () => void;
  handleEditSubmit: () => void;
};
const TodoItem = ({
  todo,
  handleEditSubmit,
  handleEditChange,
  handleRemove,
}: Props) => {
  return (
    <div key={todo.key} style={{ marginBottom: 5, display: 'flex', gap: 5 }}>
      <input id={todo.key} value={todo.name} onChange={handleEditChange} />
      <button onClick={() => handleRemove(todo.key)}>Delete</button>
      <button onClick={() => handleEditSubmit(todo.key)}>Edit</button>
    </div>
  );
};

export default TodoItem;
