import React, { Component, useState } from 'react';
import { TodoList } from './TodoList';
import { render } from 'react-dom';
import './style.css';
import Loading from './Loading';

const App = () => {
  return (
    <div>
      <Loading />
      <TodoList />
    </div>
  );
};

render(<App />, document.getElementById('root'));
