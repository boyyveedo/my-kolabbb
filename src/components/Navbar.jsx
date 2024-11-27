import React, { useState, useEffect } from 'react';
import Logo from "../assets/Logo.png";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu for mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full overflow-x-hidden">
            {/* Navbar */}
            <header
                className={`w-full h-[80px] lg:h-[104px] bg-gray-100 top-0 px-4 lg:px-[180px] flex justify-between items-center ${isSticky ? ' top-0 left-0 z-50 shadow-md' : ''}`}
            >
                {/* Logo */}
                <a href="#" className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-[22px] lg:h-auto w-auto ml-4" />
                </a>

                {/* Desktop Button */}
                <div className="hidden lg:flex items-center w-[159px] h-[56px]">
                    <button className="bg-neutralPrimary text-white py-2 px-4 transition-all duration-300 rounded-md">
                        Sign up for free
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-500 focus:outline-none focus:text-gray-300"
                    >
                        {isMenuOpen ? (
                            <FaXmark className="h-6 w-6 text-gray-500" />
                        ) : (
                            <FaBars className="h-6 w-6 text-gray-500" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-gray-100 z-50 shadow-lg">
                    <ul className="flex flex-col items-center py-4">
                        <li className="py-2">
                            <a href="#" className="text-gray-700 hover:text-neutralPrimary">
                                Home
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-gray-700 hover:text-neutralPrimary">
                                Features
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-gray-700 hover:text-neutralPrimary">
                                About
                            </a>
                        </li>
                        <li className="py-2">
                            <button className="bg-neutralPrimary text-white py-2 px-4 rounded-md">
                                Sign up for free
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
