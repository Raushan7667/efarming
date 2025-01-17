import React from 'react'
import { useNavigate } from 'react-router-dom';
import FarmCarousel from '../../Component/HomePage/Carsol';
import AgriProductCarousel from './AgriProductCarousel';
import PromoCard from './PromoCard';
import AgriSpecials from './AgriSpecials';
import BelowSomePrice from './BelowSomePrice';

const Product = () => {
    const categories = [
        {
          title: 'Seeds',
          url:"product/seeds",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5M5 12h14m-7-7c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z" />
            </svg>
          ),
          bgColor: 'bg-green-100'
        },
        {
          title: 'Equipment',
          url:"",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          ),
          bgColor: 'bg-blue-100'
        },
        {
          title: 'Pesticides',
          url:"",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
          bgColor: 'bg-red-100'
        },
        {
          title: 'Fertilizers',
          url:"",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          ),
          bgColor: 'bg-yellow-100'
        },
        {
          title: 'Irrigation',
          url:"",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          ),
          bgColor: 'bg-blue-100'
        },
        {
          title: 'Tools',
          url:"",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          bgColor: 'bg-gray-100'
        },
        {
          title: 'Storage',
          url:"",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          ),
          bgColor: 'bg-orange-100'
        }
      ];
  const navigate=useNavigate();
  const handleClick = (url) => {
    // Update state if needed
    console.log("Navigating to:", url); // Debug log
    // Example: Navigate to the category URL
    window.location.href = url; // Or use React Router's `navigate()`
  };
    
  return (
    <>
      <nav className="w-full bg-[#cefad0] shadow-sm mt-16">
        {/* Navigation Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide justify-evenly">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center cursor-pointer group"
                onClick={() => handleClick(category.url)}
              >
                <div
                  className={`rounded-full p-4 mb-2 ${category.bgColor} group-hover:shadow-md transition-shadow duration-200`}
                >
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {category.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* Carousel Section */}
      <div className="w-full">
          <FarmCarousel />
        </div>
        <div>
            <AgriProductCarousel/>
        </div>

        <div>
            <PromoCard/>
        </div>
        <div>
            <AgriSpecials/>
        </div>
        <div>
          <BelowSomePrice/>
        </div>
    </>
  );
}  

export default Product