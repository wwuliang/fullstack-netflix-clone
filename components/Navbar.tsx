import { BsChevronDown } from 'react-icons/bs';
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { useCallback, useState } from 'react';
import NavbarItem from "@/components/NavbarItem";
import MobileMenu from "@/components/MobileMenu";
import AccountMenu from '@/components/AccountMenu';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
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
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">
                        Browse
                    </p>
                    <BsChevronDown className="text-white transition"/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                {/* Profile Menu */}
                <div className="flex flex-row ml-auto gap-7 items-center">
                    {/* Search */}
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <IoSearch className="text-2xl"/>
                    </div>
                    {/* Notifications */}
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <FaRegBell className="text-2xl"/>
                    </div>
                    {/* Profile (Mobile Compatible) */}
                    <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="Netflix Profile Image"/>
                        </div>
                        <BsChevronDown className="text-white transition"/>
                        <AccountMenu/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;