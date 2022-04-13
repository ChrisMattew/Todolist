import React, { useState } from 'react';
import {} from './TodoList';

type Props = {
  todo: { name: string; key: string };
  handleRemove: (key: string) => void;
};
const TodoItem = ({ todo, handleRemove }: Props) => {
  const [content, setContent] = useState(todo.name);

  const handleEditChange = (event) => {
    setContent(event.target.value);
  };
  const handleEditSubmit = (key) => {
    // const editedList = list.map((note) => {
    //   return note.key === key && editedNote.trim()
    //     ? { ...note, name: editedNote.trim() }
    //     : note;
    // });
    // setEditedNote('');
  };
  return (
    <div key={todo.key} style={{ marginBottom: 5, display: 'flex', gap: 5 }}>
      <input id={todo.key} value={todo.name} onChange={handleEditChange} />
      <button onClick={() => handleRemove(todo.key)}>Delete</button>
      <button onClick={() => handleEditSubmit(todo.key)}>Edit</button>
    </div>
  );
};

export default TodoItem;
