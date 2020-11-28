import React from 'react';
// import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './../Logout';
// import dueFilter from '../helpers/dueFilter';
// import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
// import { AppContext } from '../context/AppContext';
// import Logout from './Logout';

const MainNav = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-dark">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">

          <Link
            to="/"
            className="text font-cursive leading-relaxed inline-block mr-2 py-2 whitespace-no-wrap uppercase text-white"
          >
            BackStage

          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-gray-dark block lg:hidden outline-none focus:outline-none"
            type="button"
          ></button>
        </div>
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
          </ul>
        </div>
        <div>
          <div className="dropdown inline-block relative">
            <button className="bg-gray-300 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <img
                className="profile-icon"
                src="../profileIcons/icon.png"
                alt="artis mirror with lightbulbs"
              />

              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
              </svg>
            </button>

            <ul className="dropdown-menu absolute hidden text-white pt-1">
              <Link
                to="/login"
                className="rounded-t bg-gray-dark hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              >
                Login
              </Link>

              <li className="bg-gray-dark hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                <Logout>Logout</Logout>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
