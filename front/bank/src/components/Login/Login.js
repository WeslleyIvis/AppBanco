import React from 'react';
import LoginForm from './LoginForm.js';
import LoginCreate from './LoginCreate.js';

import { Routes, Route } from 'react-router-dom';

function Login() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
      </Routes>
    </section>
  );
}

export default Login;
