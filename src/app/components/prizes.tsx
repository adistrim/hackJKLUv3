import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import dataSponsors from "../data/sponsors.json";
import { Share_Tech_Mono, Inter, Space_Mono } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const Prizes: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${pathname === "/sponsors" ? "block" : "md:block"} ${tech_mono.className} min-h-screen mx-[1rem] my-[3rem] md:my-[8rem]`}
      id="sponsor-section"
    >
      <div className="bg-black">
        <section className="mb-1 md:mb-16">
          <h3 className="text-[2.8rem] md:text-[4rem] font-bold text-center my-[2rem] md:mb-[1rem] md:mt-[8rem] text-[#f58b40] ">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
              }}
            >
              PRIZES WORTH ₹300K+
            </span>
          </h3>
          <div className="relative">
            <div className="flex flex-col md:flex-row bg-black rounded-[1rem] items-center justify-center relative">
              <div className="flex flex-col justify-center items-center m-[2rem] lg:order-1 order-2">
                <Image src="/prize-2.png" alt="" width={200} height={200} />
                <p className="text-[1.3rem] text-center mt-[1rem]">2nd Prize</p>
                <p className="text-[2rem] text-center mt-[1rem]">₹26,000</p>
              </div>
              <div className="flex flex-col justify-center items-center m-[2rem] lg:order-2 order-1">
                <Image src="/prize-1.png" alt="" width={250} height={250} />
                <p className="text-[1.3rem] text-center mt-[1rem]">1st Prize</p>
                <p className="text-[2rem] text-center mt-[1rem]">₹32,000</p>
              </div>
              <div className="flex flex-col justify-center items-center m-[2rem] lg:order-3 order-3">
                <Image src="/prize-3.png" alt="" width={180} height={180} />
                <p className="text-[1.3rem] text-center mt-[1rem]">3rd Prize</p>
                <p className="text-[2rem] text-center mt-[1rem]">₹22,000</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-300 text-[1.1rem] mb-[2rem]">
            We're thrilled to announce that participants will have the chance
            to compete for a staggering ₹300k+ worth of cash and goodies.
            Imagine the possibilities as you dive into a world of innovation,
            collaboration, and limitless potential. From aspiring developers
            to seasoned designers, this is your chance to shine and claim your
            share of the rewards.
          </p>
          <NextLink href="https://hack-jklu.devfolio.co/prizes/" passHref target="_blank">
            <div className="flex items-center justify-center">
              <p className="inline-block px-8 py-3 text-black text-lg md:text-xl rounded-md bg-gradient-to-r from-red-600 to-yellow-500 {{inter.className}}">
                Check Out Prizes
              </p>
            </div>
          </NextLink>
        </section>
      </div>
    </div>
  );
};

export default Prizes;