import React, { useState } from 'react';
import Todoitem from './TodoItem';

const TodoList = () => {
  const [note, setNote] = useState('');
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');
  const [editedNote, setEditedNote] = useState('');

  const createTodos = () => {
    return list
      .filter(({ name }) => name.includes(filter))
      .map((todo) => {
        return (
          <div
            key={todo.key}
            style={{ marginBottom: 5, display: 'flex', gap: 5 }}
          >
            <input
              id={todo.key}
              value={todo.name}
              onChange={handleEditChange}
            />
            <button onClick={() => handleRemove(todo.key)}>Delete</button>
            <button onClick={() => handleEditSubmit(todo.key)}>Edit</button>
          </div>
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
