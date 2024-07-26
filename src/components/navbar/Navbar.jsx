import React, { useState } from 'react';
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="px-10 py-4" style={{ background: "#232020" }}>
      <nav className="flex items-center justify-between px-8">
        <div>
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div className="hidden md:flex items-center text-white gap-5">
          <a href="/" className="text-sm">Home</a>
          <a href="/" className="text-sm">About Us</a>
          <a href="/" className="text-sm">Products</a>
          <a href="/" className="text-sm">Suppliers</a>
          <a href="/" className="text-sm">Contact Us</a>
        </div>
        <div className="hidden md:flex text-white gap-3">
          <button className="px-9 py-2 border border-white rounded-3xl">Login</button>
          <button className="rounded-3xl register-btn px-8 py-2 bg-[#E74040]">Register</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4 text-white flex flex-col gap-3">
          <a href="/" className="text-sm">Home</a>
          <a href="/" className="text-sm">About Us</a>
          <a href="/" className="text-sm">Products</a>
          <a href="/" className="text-sm">Suppliers</a>
          <a href="/" className="text-sm">Contact Us</a>
          <div className="flex flex-col gap-3 mt-3">
            <button className="px-9 py-2 border border-white rounded-3xl">Login</button>
            <button className="rounded-3xl register-btn px-8 py-2">Register</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
