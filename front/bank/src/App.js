import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  async function getTodos() {
    const resp = await axios.get('http://localhost:3333/users');
    setTodos(resp);
    console.log(resp);
  }

  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/*" element={<Login />}></Route>
      </Routes>
      <header className="App-header"></header>
    </BrowserRouter>
  );
}

export default App;
