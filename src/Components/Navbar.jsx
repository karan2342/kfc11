import { Link, NavLink } from 'react-router-dom';
import images from '../assets/images.js';
import { FaSearch } from 'react-icons/fa';

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

    <div className="flex-1 mx-6 max-w-md relative">
        <FaSearch className="absolute left-5 top-3/10  text-gray-400 " />
        <input 
          type="text" 
          placeholder=" Search menu..." 
          className="w-full max-w-sm px-9 py-2 rounded-full border border-gray-300 outline-none hover:border-3 focus:border-[#D10000]  "
        />
      </div>

   
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


          <div div className='flex flex-row gap-1.5 font-semibold cursor-pointer'>
            <div  className='hover:text-red-600'>Login</div>
            <span>/</span>
            <div className='hover:text-red-600'>Sign Up</div>
          </div>
       
       <Link to="/menu">
      <button className="bg-[#ed1909e4] text-[#FAFAFA] px-6 py-2 rounded-full font-bold cursor-pointer   hover:scale-105 transition ease-in-out duration-300">
    
        Order Now
      </button>
      </Link>
    </nav>
  );
};

export default Navbar;