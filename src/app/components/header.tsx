"use client";
import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Share_Tech_Mono, Inter } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeSidebar = (e: MouseEvent) => {
    if (
      sidebarRef.current &&
      !(sidebarRef.current as Node).contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", closeSidebar);
    }

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const scrollToItinerary = () => {
    const itinerarySection = document.getElementById("itinerary-section");
    console.log("Itinerary section:", itinerarySection);
    if (itinerarySection) {
      itinerarySection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Itinerary section not found");
    }
  };

  return (
    <div className={`relative ${inter.className}`}>
      <header
        className="relative opacity-85 text-white py-3 px-4 md:px-14 lg:px-24 flex mt-5 md:mt-10 justify-between items-center p-4 bg-black-rgba"
        style={{
          boxShadow:
            "0px 0px 500px 0px rgba(29, 43, 57, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28), 0px 0px 500px 0px rgba(34, 81, 127, 0.28)",
        }}
      >
        <div className="flex items-center">
          <NextLink href="/" passHref>
            <div className="relative h-[2rem] w-[2rem] md:h-[4rem] md:w-[4rem]">
              <Image
                src="/hackjklu-logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
                className="h-full w-full"
              />
            </div>
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
          <button
            onClick={toggleMenu}
            className="navbar-burger flex flex-col items-center py-1.5 px-2"
          >
            <span className="block w-8 h-[0.15rem] bg-white rounded"></span>
            <span className="block w-8 h-[0.15rem] bg-white mt-[0.35rem] rounded"></span>
            <span className="block w-8 h-[0.15rem] bg-white mt-[0.35rem] rounded"></span>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-[5.5rem] ${menuOpen ? 'hidden' : 'block'}">
          <NextLink href="/" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/" ? "underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-5 text-gray-400"}`}
            >
              Home
            </span>
          </NextLink>
          <NextLink href="/challenges" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/challenges" ? "underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2 text-gray-400"}`}
            >
              Challenges
            </span>
          </NextLink>
          <NextLink href="/gallery" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/gallery" ? "underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2 text-gray-400"}`}
            >
              Gallery
            </span>
          </NextLink>
          <NextLink href="/team" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/team" ? "underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2 text-gray-400"}`}
            >
              Team
            </span>
          </NextLink>
        </nav>
      </header>
      {/* Sidebar - Mobile View */}
      {menuOpen && (
        <div
          ref={sidebarRef}
          className="md:hidden lg:hidden fixed top-0 right-0 h-full w-1/2 bg-black p-4 shadow-md z-50 overflow-y-auto"
        >
          <div className="mt-[1.5rem] ml-[0.3rem]">
            <NextLink href="/" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Home
              </span>
            </NextLink>
            <NextLink href="/challenges" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Challenges
              </span>
            </NextLink>
            <NextLink href="/gallery" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Gallery
              </span>
            </NextLink>
            <NextLink href="/team" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Team
              </span>
            </NextLink>
            <NextLink href="/itinerary" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Itinerary
              </span>
            </NextLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
