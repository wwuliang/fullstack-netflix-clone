import { RiArrowDownSFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

import { useCallback, useEffect, useState } from 'react';
import NavbarItem from "@/components/NavbarItem";
import MobileMenu from "@/components/MobileMenu";
import AccountMenu from '@/components/AccountMenu';

// Scrolling Transparency Effect on Navigation Bar
const TOP_OFFSET = 66;

// Navigation Bar
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } 
            else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu(prevShowMobileMenu => !prevShowMobileMenu);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu(prevShowAccountMenu => !prevShowAccountMenu);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-black bg-opacity-100' : 'bg-gradient-to-b from-black to-transparent'}`}>
                <img className="h-4 lg:h-7" src="/images/logo.png" alt="Netflix Logo" />
                {/* Navigation for Streaming */}
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="TV Shows"/>
                    <NavbarItem label="Movies"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse by Languages"/>
                </div>
                {/*  Mobile Compatible Navigation Menu */}
                <div onMouseEnter={() => setShowMobileMenu(true)} onMouseLeave={() => setShowMobileMenu(false)}  className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">
                        Browse
                    </p>
                    <RiArrowDownSFill className={`text-xl text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                {/* Profile Menu */}
                <div className="flex flex-row ml-auto gap-7 items-center">
                    {/* Search */}
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <IoSearch className="text-xl"/>
                    </div>
                    {/* Notifications */}
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <FaRegBell className="text-xl"/>
                    </div>
                    {/* Profile (Mobile Compatible) */}
                    <div onMouseEnter={() => setShowAccountMenu(true)} onMouseLeave={() => setShowAccountMenu(false)} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-4 h-4 lg:w-8 lg:h-8 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="Netflix Profile Image"/>
                        </div>
                        <RiArrowDownSFill className={`text-xl text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;