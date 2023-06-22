import React from 'react';
import './App.css';
import HomePage from './HomePage';
import {store} from './redux';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
