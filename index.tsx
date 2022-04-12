import React, { Component, useState } from 'react';
import TodoList from './TodoList';
import { render } from 'react-dom';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return <TodoList />;
  }
}

render(<App />, document.getElementById('root'));
