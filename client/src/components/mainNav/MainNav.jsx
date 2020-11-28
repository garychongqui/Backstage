import React from 'react';
// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import dueFilter from '../helpers/dueFilter';
// import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
// import { AppContext } from '../context/AppContext';
// import Logout from './Logout';

const MainNav = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-dark mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a
            className="text font-cursive leading-relaxed inline-block mr-2 py-2 whitespace-no-wrap uppercase text-white"
            href="#pablo"
          >
            BackStage
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-gray-dark block lg:hidden outline-none focus:outline-none"
            type="button"
          ></button>
        </div>
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-2"
                href="#pablo"
              >
                Join
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="dropdown inline-block relative">
            <button className="bg-gray-300 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              User
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
