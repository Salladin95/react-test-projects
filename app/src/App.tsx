import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from 'components/Counter';

function App() {
  return <Counter max={10} />;
}

export default App;
