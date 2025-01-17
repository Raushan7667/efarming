import { Bell, Search, ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [logedIn, setIslogedIn] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Track the active section
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();

  // Update active section based on the route
  React.useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/product')) {
      setActiveSection('product');
    } else {
      setActiveSection('home');
    }
  }, [location]);

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <>
      {activeSection !== 'product' ? (
        <nav className="bg-green-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto px-4 flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              eFarming
            </Link>

            {/* Links */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gray-200">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
              <li onClick={() => setActiveSection('product')}>
                <Link to="/product" className="hover:text-gray-200">
                  Product
                </Link>
              </li>
              {!logedIn && (
                <div className="flex gap-5">
                  <li>
                    <Link to="/signup" className="hover:text-gray-200 font-bold">
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="font-bold hover:text-gray-200">
                      Login
                    </Link>
                  </li>
                </div>
              )}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="block md:hidden">
              <ul className="space-y-4 px-4 py-2 bg-green-700">
                <li>
                  <Link to="/" className="hover:text-gray-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:text-gray-200">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-200">
                    Contact
                  </Link>
                </li>
                <li onClick={() => setActiveSection('product')}>
                  <Link to="/product" className="hover:text-gray-200">
                    Product
                  </Link>
                </li>
                {!logedIn && (
                  <>
                    <li>
                      <Link to="/signup" className="hover:text-gray-200 font-bold">
                        SignUp
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="font-bold hover:text-gray-200">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </nav>
      ) : (
        <div className="fixed top-0 left-0 w-full bg-green-600 text-white shadow-lg z-50">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo and Search */}
            <div className="flex items-center gap-10">
              <Link to="/" className="text-2xl font-bold">
                eFarming
              </Link>

              <div className="flex items-center border border-gray-300 rounded-lg shadow-sm bg-lime-200">
                <button
                  onClick={handleSearch}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <Search className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search here..."
                  className="w-full px-2 py-1 text-gray-700 bg-lime-200 focus:outline-none"
                />
              </div>
            </div>

            {/* Cart, Profile, and Notification */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
                <Bell className="w-5 h-5" />
                <span>Notification</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

