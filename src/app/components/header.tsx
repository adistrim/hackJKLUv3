'use client';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname()

    return (
        <header className="bg-gray-800 text-white py-7 px-24 flex justify-between items-center">
            {/* Left side - Logos */}
            <div className="flex items-center">
                {/* <img
                    src="logo.png" 
                    alt="Logo"
                    className="h-8 w-8 mr-2"
                /> */}
                <div className="flex items-center space-x-4">
                    <NextLink href="/" passHref>
                        <span className="text-xl font-bold">Hack JKLU 3.0</span>
                    </NextLink>
                    <span className="text-xl ">|</span>
                    <NextLink href="https://jklu.edu.in/" passHref legacyBehavior>
                        <a target="_blank">
                            <span className="text-xl cursor-pointer font-bold">JKLU</span>
                        </a>
                    </NextLink>
                </div>
            </div>

            {/* Right side - Navigation links */}
            <div className="flex items-center space-x-10">
                <NextLink href="/team" passHref>
                    <span className={`cursor-pointer ${pathname === '/team' ? 'underline' : 'hover:underline'}`}>
                        Implementation-Team
                    </span>
                </NextLink>
                <NextLink href="/challenges" passHref>
                    <span className={`cursor-pointer ${pathname === '/challenges' ? 'underline' : 'hover:underline'}`}>Challenges</span>
                </NextLink>
                <NextLink href="/benefits" passHref>
                    <span className={`cursor-pointer ${pathname === '/benefits' ? 'underline' : 'hover:underline'}`}>Benefits</span>
                </NextLink>
                <NextLink href="https://devfolio.co/" passHref legacyBehavior>
                    <a target='_blank'>
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800">
                            Register
                        </button>
                    </a>
                </NextLink>
            </div>
        </header>
    );
};

export default Header;
