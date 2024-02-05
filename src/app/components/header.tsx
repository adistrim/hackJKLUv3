'use client';
import React, { useState, useEffect, useRef } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Share_Tech_Mono } from 'next/font/google';

const tech_mono = Share_Tech_Mono({ subsets: ['latin'], weight: ['400'] });

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const sidebarRef = useRef(null);
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeSidebar = (e: MouseEvent) => {
        if (sidebarRef.current && !(sidebarRef.current as Node).contains(e.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('click', closeSidebar);
        }

        return () => {
            document.removeEventListener('click', closeSidebar);
        };
    }, [menuOpen]);

    return (
        <div className={`relative ${tech_mono.className}`}>

            <header
                className="relative opacity-85 text-white py-3 px-24 flex mt-10 justify-between items-center p-4 bg-black-rgba text-white"

                style={{ boxShadow: '0px 0px 500px 0px rgba(29, 43, 57, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28)' }}>

                <div className="flex items-center">
                    <NextLink href="/" passHref>
                        <Image
                            src="/hackjklu-logo.png"
                            alt="Logo"
                            width={65}
                            height={16}
                        />
                    </NextLink>
                    <NextLink href="/" passHref>
                        <Image
                            src="/hackjklu-text.png"
                            alt="Text"
                            width={265}
                            height={65}
                            className="ml-2 mt-2 hidden md:block"
                        />
                    </NextLink>
                </div>

                {/* Hamburger menu */}
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="navbar-burger flex flex-col items-center py-1.5 px-2">
                        <span className="block w-10 h-[0.15rem] bg-white rounded"></span>
                        <span className="block w-10 h-[0.2rem] bg-white mt-[0.5rem] rounded"></span>
                        <span className="block w-10 h-[0.15rem] bg-white mt-[0.5rem] rounded"></span>
                    </button>
                </div>


                <nav className="hidden md:flex items-center space-x-[5.5rem] ${menuOpen ? 'hidden' : 'block'}">
                    <NextLink href="/" passHref>
                        <span className={`cursor-pointer text-[1.2rem] ${pathname === '/' ? 'underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2' : 'hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-5'}`}>Home</span>
                    </NextLink>
                    <NextLink href="/challenges" passHref>
                        <span className={`cursor-pointer text-[1.2rem] ${pathname === '/challenges' ? 'underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2' : 'hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2'}`}>Challenges</span>
                    </NextLink>
                    <NextLink href="/team" passHref>
                        <span className={`cursor-pointer text-[1.2rem] ${pathname === '/team' ? 'underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2' : 'hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2'}`}>Team</span>
                    </NextLink>
                </nav>

                {/* Sidebar - Mobile View */}
                {menuOpen && (
                    <div ref={sidebarRef} className=" md:hidden lg:hidden flex flex-col fixed top-0 right-0 h-full w-1/2 bg-black p-4 shadow-md z-50 overflow-y-auto">
                        <NextLink href="/" passHref>
                            <span className={`m-10 cursor-pointer text-[1.5rem]`}>Home</span>
                        </NextLink>
                        <NextLink href="/challenges" passHref>
                            <span className={`m-10 cursor-pointer text-[1.5rem]`}>Challenges</span>
                        </NextLink>
                        <NextLink href="/team" passHref>
                            <span className={`m-10 cursor-pointer text-[1.5rem]`}>Team</span>
                        </NextLink>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
