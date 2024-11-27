import React, { useState, useEffect } from 'react'
import Logo from "../assets/Logo.png"
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    // Toggle menu for mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div className="flex justify-center ">
            {/* Navbar */}
            <header className={`w-full h-[104px]  bg-gray-100 top-0 px-[180px] py-[24px] flex justify-between items-center`}>
                {/* Logo */}
                <a href="#" className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-auto w-auto" />
                </a>

                {/* Desktop Button */}
                <div className="hidden lg:flex items-center w-[159px] h-[56px] ">
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
        </div>
    )
}

export default Navbar
