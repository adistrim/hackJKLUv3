import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Share_Tech_Mono, Inter } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ['400'] });
const inter = Inter({ subsets: ['latin'] })

const HomeComponent = () => {
    return (
        <div className={`mx-[10rem] ${tech_mono.className}`}>
            <div className={`flex mt-[8rem]`}>
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
                        An event where incredible minds work together to solve a problem and create a solution, application, or service. Top 3 contestants all receive prizes. So, Put your skill to the test in the mainframe and register today.
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
            <Image
                className="my-[12rem]"
                src="/CODE_CREATE_CONNECT.png"
                alt=""
                width={1920}
                height={1080}
            />
            <div className="relative">
                <div className="absolute -inset-0.5 bg-white rounded-[1rem] blur opacity-75"></div>
                <div className="flex flex-col bg-black rounded-[1rem] items-center justify-center mt-[12rem] relative">
                    <div className="m-[3.5rem]">
                        <h1 className="text-[4rem] text-center mb-4" style={{ backgroundImage: 'linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                            HOW IT WORKS?
                        </h1>
                        <div className={`flex flex-row ${inter.className}`}>
                            <div className="flex flex-col justify-center items-center m-[2rem]">
                                <Image
                                    src="/section-image-1.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                                <p className="text-[1rem] text-center mt-[1rem]">
                                    HackJKLU is a 36-hour hackathon where students from all over the world come together to work in teams of 1 - 4 to build an innovative solution to a problem.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center m-[2rem]">
                                <Image
                                    src="/section-image-2.png"
                                    alt=""
                                    width={160}
                                    height={160}
                                />
                                <p className="text-[1rem] text-center mt-[1rem]">
                                    Hackathons are a great way to meet new people, learn new skills, and have fun! We encourage all students to participate, regardless of their experience level.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center m-[2rem]">
                                <Image
                                    src="/section-image-3.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                                <p className="text-[1rem] text-center mt-[1rem]">
                                    Hackathons are a great way to meet new people, learn new skills, and have fun! We encourage all students to participate, regardless of their experience level.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;
