import React from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/form.css';

const grid = {
  display: 'grid',
  //gridTemplateColumns: '1fr 1fr',
  margin: '10px 10%',
};

function LoginCreate() {
  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const resp = await axios.get('http://localhost:3333/users', {
      username: name,
      password: pass,
    });
    console.log(resp.data[1]);
    if (resp.status === 200) {
      let ok = true;

      // navigate('/login');
    }

    console.log(resp);
  }

  return (
    <section style={grid}>
      <div className="loginAreaOptions"></div>
      <div className="loginArea">
        <div className="baseWidth">
          <h2>Create Account</h2>
          <div>
            <img
              src="https://www.adobe.com/br/express/create/logo/media_1bf03242eba8633ef1d6b0a9e144010ac9b3bf229.jpeg?width=400&format=jpeg&optimize=medium"
              alt=""
              style={{ width: '200px' }}
            />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Name</label>
            <input
              defaultValue={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
              type="text"
              placeholder="Username"
            />
            <input
              defaultValue={pass}
              onChange={({ target }) => {
                setPass(+target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <button>CREATE</button>
          </form>

          <p>
            Já tem conta?{' '}
            <NavLink to={'/login'} className="new">
              Back
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}
export default LoginCreate;
