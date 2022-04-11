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
    return (
      <TodoList />
      // <div>
      //   <input placeholder="filtra" />
      //   <br />
      //   <input />
      //   <button>Salva</button>
      //   <br />
      //   {Array.from({ length: 8 }).map((_, i) => (
      //     <div>
      //       <input value={`Nota ${i}`} />
      //       <button>Elimina</button>
      //     </div>
      //   ))}
      // </div>
    );
  }
}

render(<App />, document.getElementById('root'));
