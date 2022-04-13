import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './style.css';

const getRandomKey = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

const TodoList = () => {
  const [note, setNote] = useState('');
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');

  const handleRemove = (key: string) => {
    setList(list.filter((note) => note.key !== key));
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
  const handleUpdateSubmit = (content, key) => {
    setList(
      list.map((note) => (note.key === key ? { ...note, name: content } : note))
    );
  };
  const createTodos = () => {
    return;
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
        <button className="btn" onClick={handleSubmit}>
          Add
        </button>
        <button className="btn" onClick={() => console.log(list)}>
          Export
        </button>
      </div>
      <div>
        {list
          .filter(({ name }) => name.includes(filter))
          .map((todo) => {
            return (
              <TodoItem
                key={todo.key}
                todo={todo}
                handleUpdateSubmit={handleUpdateSubmit}
                handleRemove={handleRemove}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
