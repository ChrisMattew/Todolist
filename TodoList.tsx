import React, { useState } from 'react';
import TodoItem, { getRandomKey } from './TodoItem';

const TodoList = () => {
  const [note, setNote] = useState('');
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');
  const [editedNote, setEditedNote] = useState('');

  const handleEditChange = (event) => {
    setEditedNote(event.target.value);
  };

  const handleRemove = (key: string) => {
    const newList = list.filter((note) => note.key !== key);

    setList(newList);
  };

  const handleEditSubmit = (key) => {
    const editedList = list.map((note) => {
      return note.key === key && editedNote.trim()
        ? { ...note, name: editedNote.trim() }
        : note;
    });
    setList(editedList);
    setEditedNote('');
  };
  const handleChange = (event) => {
    setNote(event.target.value);
  };
  const handleSubmit = () => {
    if (note.trim())
      setList(list.concat({ name: note.trim(), key: getRandomKey() }));

    setNote('');
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const createTodos = () => {
    return list
      .filter(({ name }) => name.includes(filter))
      .map((todo) => {
        return (
          <TodoItem
            todo={todo}
            handleEditChange={() => handleEditChange}
            handleEditSubmit={() => handleEditSubmit}
            handleRemove={() => handleRemove}
          />
        );
      });
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 500,
      }}
    >
      <div style={{ display: 'flex', gap: 10 }}>
        <label>Add</label>
        <input type="text" value={note} onChange={handleChange} />
        <label>Filter</label>
        <input type="search" value={filter} onChange={handleFilter} />
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          style={{
            marginTop: 20,
            marginBottom: 20,
            width: 100,
            height: 30,
            borderRadius: 50,
            background: 'dodgerblue',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div>{createTodos()}</div>
    </div>
  );
};

export default TodoList;
