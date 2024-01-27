import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Share_Tech_Mono } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ['400'] });

const HomeComponent = () => {
    return (
        <div className={`flex mx-[10rem] mt-[8rem] ${tech_mono.className}`}>
            <div className="flex flex-col items-start justify-center w-1/2">
                <h2 className="text-[2.25rem] text-left">
                    15th - 17th March
                </h2>
                <h1 className="text-[4rem] font-bold text-left mb-4" style={{ backgroundImage: 'linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    HackJKLU 3.0
                </h1>
                <h3 className="text-[2rem] font-thin text-left mb-4 border-l-4 border-solid border-gray-300 pl-4">
                    We Challenge You!
                </h3>
                <p className="text-[1.1rem] mb-4">
                    An event where designers and developers work together to solve a problem and create a new solution, application, or service. Top 3 contestants all receive custom prizes. Put your skill to the test in the mainframe and sign up today.
                </p>
                <NextLink href="https://devfolio.co/" passHref>
                    <p className="inline-flex px-8 py-3 text-black text-[1.3rem] justify-center items-center gap-4 rounded-md bg-gradient-to-r from-red-600 to-yellow-500">
                        Register Now
                    </p>
                </NextLink>

            </div>

            <div className="w-1/2 ml-[2rem] flex justfiy-center items-center">
                <Image

                    className=""
                    src="/hero-image.png"
                    alt=""
                    width={600}
                    height={600}
                />
            </div>
        </div>
    )
}

export default HomeComponent;
