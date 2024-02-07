/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { menu, close } from '../assets';
import { navLinks, signup } from '../constants';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary bg-opacity-90 backdrop-blur`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer">
            PHXHAX
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
                           hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <Link
              to={`https://docs.google.com/document/d/1U44gAgG0d3-_8ZP-FuaK8-SrjbYKU_nOjiaKbHxNaHQ/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="	text-decoration-line: none text-white text-[18px] font-medium cursor-pointer hover:text-decoration-line: underline"
            >
              Info Packet
            </Link>
          <button
            className="bg-white py-2 px-6 outline-none w-fit 
            text-tertiary font-bold shadow-md shadow-primary
            rounded-xl hover:bg-tertiary hover:text-white"
          >
            <Link
              to={`${signup}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Sign Up
            </Link>
          </button>
        </ul>
        <div className="md:hidden flex flex-1 justify-end item-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] 
              object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></img>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-tertiary" : "text-secondary"
                  }
                          hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.id);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <Link
                  to={`https://docs.google.com/document/d/1U44gAgG0d3-_8ZP-FuaK8-SrjbYKU_nOjiaKbHxNaHQ/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px]"
                >
                  Info Packet
                </Link>
              </li>
              <li>
                <Link
                  to={`${signup}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white font-poppins font-medium cursor-pointer text-[16px]"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar