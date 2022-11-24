import React from 'react';
import './styles/login.css';

const grid = {
  display: 'grid',
  //gridTemplateColumns: '1fr 1fr',
  margin: '10px 10%',
};

function Login() {
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

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>SIGN IN</button>
          <p>
            Don't have an account? <b className="new">Sign Up Now</b>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
