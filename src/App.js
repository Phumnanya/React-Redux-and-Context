import React from 'react';
import './App.css';
import { Context } from './state management/Context';
import Usage from './state management/Usage';
import Counter from './state management/redux';

function App() {
  return (
     <>
     <Context>
        <Usage />
        <Counter />
      </Context>
     </>
  );
}

export default App;