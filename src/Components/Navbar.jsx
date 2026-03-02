import { Link, NavLink } from 'react-router-dom';
import images from '../assets/images.js';

const Navbar = () => {
  return (
    <nav className="bg-[#FBF6F6] shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      
      <Link to="/" className="flex items-center gap-3">
        <img 
          src={images.kfcLogo} 
          alt="KFC" 
          className="h-12 w-12 rounded-full  "
        />
        <span className="text-2xl font-bold text-black">
          KFC<span className="text-[#D10000]">Pasal</span>
        </span>
      </Link>

   
      <ul className="flex items-center gap-8 font-medium text-black">
        <li >
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-[#E4002B] border-b-2 border-[#E4002B] pb-1" : "hover:text-[#E4002B]"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => 
              isActive ? "text-[#E4002B] border-b-2 border-[#E4002B] pb-1" : "hover:text-[#E4002B]"
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-[#E4002B] border-b-2 border-[#E4002B] pb-1" : "hover:text-[#E4002B]"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
       
       <Link to="/menu">
      <button className="bg-[#ed1909e4] text-[#FAFAFA] px-6 py-2 rounded-full font-bold cursor-pointer   hover:scale-105 transition ease-in-out duration-300">
    
        Order Now
      </button>
      </Link>
    </nav>
  );
};

export default Navbar;