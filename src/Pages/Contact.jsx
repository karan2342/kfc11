import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-black text-white p-10 min-h-screen">
      
   
      <h1 className="text-4xl font-bold text-center mb-4">
        Get in Touch
      </h1>
      <p className="text-center text-gray-400 mb-10">
        Send us a message and we will reply soon.
      </p>

      <div className="grid grid-cols-2 gap-10 w-5xl mx-auto">
        
       
        <div className="bg-gray-900 p-6 rounded-lg">
          <form className="flex flex-col gap-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-gray-800 border border-gray-700 rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-gray-800 border border-gray-700 rounded"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 bg-gray-800 border border-gray-700 rounded"
            ></textarea>

            <button className="bg-red-600 p-3 rounded font-bold hover:bg-red-700 cursor-pointer">
              Send Message
            </button>

          </form>
        </div>

        
        <div className="flex flex-col gap-6">
          
          <div className="bg-gray-900 p-6 rounded flex items-center gap-4">
            <FaPhoneAlt className="text-red-500 text-xl" />
            <p>+977-973244724</p>
          </div>

          <div className="bg-gray-900 p-6 rounded flex items-center gap-4">
            <FaEnvelope className="text-red-500 text-xl" />
            <p>hello@kfcpasal.com</p>
          </div>

          <div className="bg-red-600 p-6 rounded flex items-center gap-4">
            <FaClock className="text-xl" />
            <div>
              <p>Sun - Fri: 10AM - 10PM</p>
              <p>Sat: 11AM - 11PM</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;