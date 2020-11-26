import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Login = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
    console.log(event);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container">
      <div className="main-area">
        <form action="" className="form" onSubmit={handleLogin}>
          <div className="inner-form">
            <h1 className="text-ob">Welcome Backstage</h1>
            <input
              type="email"
              name="email"
              id=""
              className="text-input"
              placeholder="Enter your e-mail"
              onChange={handleChange}
            />
          </div>
          <div className="inner-form">
            <input
              type="password"
              name="password"
              id=""
              className="text-input"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <section className="inner-form">
            <button className="btn-3" type="button">
              Log in
            </button>
          </section>
          {/* <section>
            <button className="btn-2" type="button">
              SECONDARY
            </button>
          </section>
          <section>
            <button className="btn-3" type="button">
              3RD
            </button>
          </section>
          <section>
            <button className="btn-4" type="button">
              4TH
            </button>
          </section>
          <section>
            <button className="btn-5" type="button">
              5TH
            </button>
          </section>
          <div></div> */}
        </form>
      </div>
    </div>
  );
};
export default Login;
