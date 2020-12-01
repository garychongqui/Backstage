import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import '../styles/index.css';

const Logout = () => {
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      swal(response.data.message, 'You have signed out!', 'success').then(() =>
        history.push('/')
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link to="/" onClick={handleSignOut}>
      Logout
    </Link>
  );
};

export default Logout;
