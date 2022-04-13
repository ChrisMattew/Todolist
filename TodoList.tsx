import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { Title } from './Title';
import './style.css';

const getRandomKey = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

export const TodoList = () => {
  const [note, setNote] = useState('');
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('useEffect TodoList', filter);
  }, [filter, note]);

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

  console.log('render TodoList');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 500,
      }}
    >
      <Title filter={filter} />
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
