import React, { useState } from 'react';
import TodoList from './TodoList';

export const getRandomKey = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

const TodoItem = () => {
  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleEditChange = (event) => {
    setEditedNote(event.target.value);
  };

  const handleSubmit = () => {
    if (note.trim())
      setList(list.concat({ name: note.trim(), key: getRandomKey() }));

    setNote('');
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
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return <div></div>;
};

export default TodoItem;
