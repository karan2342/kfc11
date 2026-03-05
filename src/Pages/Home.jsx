import React from 'react';
import image from '../assets/images.js'
import { useNavigate } from 'react-router-dom';
import { Truck, Utensils, Clock } from 'lucide-react';
const Home = () => {
  const navigate = useNavigate();
  const menunav = () =>{
    navigate('/menu')
  };
  return (
    <div className="bg-white ">
      <section className="relative h-[700px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-60">
           <img 
            src={image.herosection}
            alt="Fried Chicken" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic">
            Finger Licking' <br />
            <span className="text-red-600">Chicken!</span>
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
        

        {/*card 1*/}
          <div className="bg-red-600 rounded-3xl p-8 text-white flex justify-between items-center overflow-hidden">
            <div>
              <h3 className="text-2xl font-bold">Wednesday Bucket</h3>
              <p className="mt-2 text-red-100">Get 10pcs for only Rs. 999</p>
              <button className="mt-4 bg-white text-red-600 px-6 py-2 rounded-full font-bold cursor-pointer" onClick={menunav}>Claim Deal</button>
            </div>
            <div className="text-6xl opacity-20 font-black tracking-tighter">OFFER</div>
          </div>
          
         {/*card 2*/}
          <div className="bg-yellow-500 rounded-3xl p-8 text-white flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">Free Delivery</h3>
              <p className="mt-2 text-yellow-50).">On orders above Rs. 1500</p>
              <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-full font-bold cursor-pointer" onClick={menunav}>Order Now</button>
            </div>
            <div className="text-6xl opacity-20 font-black">FAST</div>
          </div>

       {/*card 3*/}
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

      <section className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase italic text-gray-900">
            Why Choose <span className="text-red-600">KFCPasal?</span>
          </h2>
          <div className="h-1 w-30 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-3  gap-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:bg-blue-600">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white">
            <Truck className="text-blue-500 w-10 h-10 transition-colors duration-300 group-hover:text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-blue-500 group-hover:text-white">Fast Delivery</h3>
          <p className="text-gray-600 p-1 leading-relaxed group-hover:text-blue-50">
            Craving can't wait. We deliver your favorite chicken hot and fresh in under 30 minutes.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:bg-green-600">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white">
            <Utensils className="text-green-500 w-10 h-10 transition-colors duration-300 group-hover:text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-green-500 group-hover:text-white">Premium Quality</h3>
          <p className="text-gray-600 p-1 leading-relaxed group-hover:text-green-50">
            We use 100% fresh chicken and our secret 11 herbs and spices to give you that legendary taste.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:bg-yellow-500">
          <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white">
            <Clock className="text-yellow-500 w-10 h-10 transition-colors duration-300 group-hover:text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-yellow-600 group-hover:text-white">Easy Ordering</h3>
          <p className="text-gray-600 p-1 leading-relaxed group-hover:text-yellow-50">
            No more long queues. Browse our menu and order with just a few clicks from your home.
          </p>
        </div>

        </div>
      </div>
    </section>


    </div>
  );
};

export default Home;