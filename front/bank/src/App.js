import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

const arrayTodos = [
  { name: 'Iniciar una partida', status: false },
  { name: 'Excluir amigo', status: false },
];

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((element) => {
        return (
          <div key={element.name}>
            <p>{element.name}</p>
            <button>Start</button>
            <button>Excluir</button>
          </div>
        );
      })}
    </div>
  );
};

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
    <div className="App">
      <header className="App-header">
        <Todos todos={arrayTodos}></Todos>
        {todos.status && todos && (
          <div>
            {todos.data.map((item) => (
              <div>{item.username}</div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
