import React from 'react';
import { CodeBracketIcon, DeviceTabletIcon } from '@heroicons/react/24/outline'; 
import belal from "../assets/b.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-press-start text-white flex flex-col items-center justify-center text-center space-y-8 p-5"  >
    
      <p className="text-xl text-green-500" data-aos="fade-left">✌️ Hi There! I'm Belal Uddin</p>
 
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold " data-aos="fade-left">
        A <span className="text-green-500">Frontend Dev</span>
      </h1>
      <h2 className="text-xl md:text-2xl">
        I Help Startups <span className="text-blue-400">Launch</span> and 
        <span className="text-green-500">Grow</span> Their Products
      </h2>

       
      <p className="max-w-lg text-sm md:text-base" data-aos="fade-left">
        I am a software engineer with more than one year of experience, recognized as a
        practical and effective developer, experienced in leading cross-functional teams
        in time-pressured settings to complete projects on schedule and within budget.
      </p>

    
      <div className="flex flex-col items-center space-y-4" data-aos="fade-right">
  
        <div className="relative bg-gray-800 p-1 rounded-full shadow-lg transition-transform transform hover:scale-105 " data-aos="fade-down">
          <img src={belal} alt="Belal Uddin" className="h-40 w-40 rounded-full object-cover shadow-xl" />
        </div>

       <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CodeBracketIcon className="h-6 w-6 text-green-500" />
            <span>Writing Frontend Code</span>
          </div>
          <div className="flex items-center space-x-2">
            <DeviceTabletIcon className="h-6 w-6 text-yellow-500" />
            <span>Fueled by Coffee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
