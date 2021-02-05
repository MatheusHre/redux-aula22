import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import Todos from './Todos';
import Usuarios from './Usuarios';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Usuarios />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
