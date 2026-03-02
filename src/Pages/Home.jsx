import React from 'react';
import image from '../assets/images.js'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const menunav = () =>{
    navigate('/menu')
  };
  return (
    <div className="bg-white">
      <section className="relative h-[500px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-60">
           <img 
            src={image.herosection}
            alt="Fried Chicken" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic">
            Finger Lickin' <br />
            <span className="text-red-600">Good!</span>
          </h1>
          <p className="mt-4 text-xl max-w-md">
            The legendary taste is now just a click away. Order your favorites from KFCPasal.
          </p>
          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-4 cursor-pointer px-10 rounded-full transition-all duration-200 ease-in-out hover:scale-110 " onClick={menunav}>
            ORDER NOW
          </button>
        </div>
      </section>

      <section className="py-16  mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 border-l-8 border-red-600 pl-4">Today's Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
          <div className="bg-red-600 rounded-3xl p-8 text-white flex justify-between items-center overflow-hidden">
            <div>
              <h3 className="text-2xl font-bold">Wednesday Bucket</h3>
              <p className="mt-2 text-red-100">Get 10pcs for only Rs. 999</p>
              <button className="mt-4 bg-white text-red-600 px-6 py-2 rounded-full font-bold cursor-pointer" onClick={menunav}>Claim Deal</button>
            </div>
            <div className="text-6xl opacity-20 font-black tracking-tighter">OFFER</div>
          </div>
          
      
          <div className="bg-yellow-500 rounded-3xl p-8 text-white flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">Free Delivery</h3>
              <p className="mt-2 text-yellow-50).">On orders above Rs. 1500</p>
              <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-full font-bold cursor-pointer" onClick={menunav}>Order Now</button>
            </div>
            <div className="text-6xl opacity-20 font-black">FAST</div>
          </div>


        <div className="bg-green-600 rounded-3xl p-8 text-white flex justify-between items-center overflow-hidden">
       <div>
       <h3 className="text-2xl font-bold">Family Feast</h3>
       <p className="mt-2 text-green-100">Save 20% on Jumbo Buckets</p>
      <button className="mt-4 bg-white text-green-600 px-6 py-2 rounded-full font-bold cursor-pointer" onClick={menunav}>
         Order Family Pack
      </button>
     </div>
      <div className="text-6xl opacity-20 font-black tracking-tighter ">
           SAVE
      </div>
     </div>


    </div>

      </section>
    </div>
  );
};

export default Home;