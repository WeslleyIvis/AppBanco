import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../styles/form.css';

const grid = {
  display: 'grid',
  //gridTemplateColumns: '1fr 1fr',
  margin: '10px 10%',
};

function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.get('http://localhost:3333/users', {
      username: username,
      password: password,
    });
  }

  return (
    <section style={grid}>
      <div className="loginAreaOptions"></div>
      <div className="loginArea">
        <div className="baseWidth">
          <h2>Welcome To</h2>
          <div>
            <img
              src="https://www.adobe.com/br/express/create/logo/media_1bf03242eba8633ef1d6b0a9e144010ac9b3bf229.jpeg?width=400&format=jpeg&optimize=medium"
              alt=""
              style={{ width: '200px' }}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Name</label>
            <input
              defaultValue={username}
              onChange={({ target }) => {
                setUsername(target.value);
              }}
              type="text"
              placeholder="Username"
            />
            <input
              defaultValue={password}
              onChange={({ target }) => {
                setPassword(+target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <button>SIGN IN</button>
          </form>

          <p>
            Don't have an account?{' '}
            <NavLink to={'create'} className="new">
              Sign Up Now
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
