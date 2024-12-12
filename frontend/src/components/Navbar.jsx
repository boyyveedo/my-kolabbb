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

    // Create a ref for the input section in Home
    const scrollToInput = () => {
        const element = document.getElementById("waitlist-input");
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    // Scroll and close the menu
    const handleJoinWaitlist = () => {
        scrollToInput();   // Scroll to the input section
        setIsMenuOpen(false);   // Close the mobile menu
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full ${isSticky ? 'top-0 shadow-md z-50' : ''} ${isMenuOpen ? 'bg-neutralIndi' : 'bg-neutralSemantic'}`}
        >
            {/* Navbar */}
            <header
                className="max-w-[1440px] w-full h-[104px] flex justify-between items-center px-4 md:px-12 lg:px-[72px] mx-auto"
            >
                {/* Logo */}
                <div className={`w-[110.5px] h-[25.12px] ${isMenuOpen ? 'hidden' : ''}`}>
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block w-[166px]">
                    <button
                        onClick={scrollToInput}
                        className="bg-neutralPrimary rounded-md px-4 py-3 text-white transition-all duration-300"
                    >
                        Join the Waitlist
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex justify-end w-full">
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
            <div
                className={`absolute left-0 w-full h-[290px] bg-neutralIndi z-50 shadow-lg transition-all duration-500 ${isMenuOpen ? 'top-[104px]' : '-top-[300px]' // Menu drops from top when open
                    }`}
            >
                {isMenuOpen && (
                    <ul className="flex flex-col items-center py-6">
                        <li className="py-2">
                            <button
                                onClick={handleJoinWaitlist} // Now handles both actions
                                className="bg-neutralPrimary mt-[80px] text-white px-6 py-3 rounded-md"
                            >
                                Join the Waitlist
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
