import React, { useState } from 'react';

const TodoList = () => {
  let result = '';
  const [note, setNote] = useState('');
  const [list, setList] = useState([]);

  const setValue = (event) => {
    setNote(event.target.value);
  };
  const handleChange = () => {
    setList(list.concat(note));
  };
  const createTodos = () => {
    return list.map((todo) => <input value={todo} />);
  };

  console.log(list);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 500,
      }}
    >
      <h1>{note}</h1>
      <input type="text" value={note} onChange={setValue} />
      <button
        style={{
          width: 100,
          height: 30,
          borderRadius: 50,
          background: 'dodgerblue',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={() => {
          handleChange();
        }}
      >
        Cliccami tutto
      </button>
      <div>{createTodos()}</div>
    </div>
  );
};

export default TodoList;
