import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="w-7xl mx-auto flex flex-row justify-between items-center gap-8">
        
     
        <div className="text-2xl font-bold tracking-tight">
          KFC<span className="text-[#D10000]">Pasal</span>
        </div>

 
        <ul className="flex flex-wrap justify-center gap-8 text-gray-300 font-medium">
          <li>
            <Link to="/" className="hover:text-[#D10000] transition-colors duration-300">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#D10000] transition-colors duration-300">Contact</Link>
          </li>
          <li>
            <Link to="" className="hover:text-[#D10000] transition-colors duration-300">Privacy Policy</Link>
          </li>
        </ul>

       
        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-[#D10000] transition-transform hover:-translate-y-1">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-[#D10000] transition-transform hover:-translate-y-1">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#D10000] transition-transform hover:-translate-y-1">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#D10000] transition-transform hover:-translate-y-1">
            <FaYoutube />
          </a>
        </div>
      </div>

    
      <div className="w-7xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        ©2026 KFC Pasal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;