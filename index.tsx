import React from 'react';
import { TodoList } from './TodoList';
import { render } from 'react-dom';
import './style.css';
import Loading from './Loading';

const App = () => {
  return (
    <div>
      <Loading>
        <TodoList />
      </Loading>
    </div>
  );
};

render(<App />, document.getElementById('root'));
