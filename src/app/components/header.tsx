'use client';
import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Share_Tech_Mono } from 'next/font/google';

const tech_mono = Share_Tech_Mono({ subsets: ['latin'], weight: ['400'] });

const Header: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className={`relative ${tech_mono.className}`}>

            <header
                className="relative opacity-75 text-white py-3 px-24 flex mt-10 justify-between items-center p-4 bg-black-rgba text-white"

                style={{ boxShadow: '0px 0px 500px 0px rgba(29, 43, 57, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28)' }}>

                <div className="flex items-center">
                    <NextLink href="/" passHref>
                        <img
                            src="/hackjklu-logo.png"
                            alt="Logo"
                            className="h-16"
                        />
                    </NextLink>
                    <NextLink href="/" passHref>
                        <img
                            src="/hackjklu-text.png"
                            alt="Text"
                            className="h-12 ml-2 mt-2"
                        />
                    </NextLink>
                </div>


                <nav className="flex items-center space-x-[5.5rem]">
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
            </header>
        </div>
    );
};

export default Header;
