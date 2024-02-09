import React from "react";
import Image from "next/image";
import RegisterBtn from "./registerbtn";
import NextLink from "next/link";
import { Share_Tech_Mono, Inter } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ['400'] });
const inter = Inter({ subsets: ['latin'] })

const HomeComponent = () => {
    return (
        <div className={`mx-[1rem] md:mx-[10rem] ${tech_mono.className}`}>
            <div className={`flex flex-col md:flex-row items-center justify-center mt-[1.5rem] md:mt-[8rem]`}>
                <div className="flex flex-col items-center md:items-start justify-center w-100% md:w-1/2">
                    <h2 className="text-[1.3rem] md:text-[2.25rem] text-center md:text-left">
                        15th - 17th March, 2024
                    </h2>
                    <h1 className="text-[2.8rem] md:text-[4rem] font-bold text-left mb-4" style={{ backgroundImage: 'linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                        HackJKLU 3.0
                    </h1>
                    <h3 className="hidden md:block text-[2rem] font-thin text-left mb-9 border-l-4 border-solid border-gray-300 pl-4">
                        We Challenge You!
                    </h3>
                    <p className="hidden md:block text-[1.1rem] mb-4">
                    Come be a part of an event where amazing minds team up to solve problems and bring new ideas to life. The top three contestants will each win prizes. Don't miss out—register today and put your skills to the test in the mainframe!
                    </p>
                    <div className="hidden md:block">
                        <RegisterBtn />
                    </div>
                </div>

                <div className="w-4/5  md:w-1/2 ml-[2rem] flex justfiy-center items-center">
                    <Image
                        className=""
                        src="/hero-image.png"
                        alt=""
                        width={600}
                        height={600}
                    />
                </div>
                <h3 className="block md:hidden text-[1.5rem] font-thin text-left my-8 border-l-4 border-solid border-gray-300 pl-4">
                    We Challenge You!
                </h3>
                <p className="block md:hidden text-center text-[0.9rem] mb-4">
                Come be a part of an event where amazing minds team up to solve problems and bring new ideas to life. The top three contestants will each win prizes. Don't miss out—register today and put your skills to the test in the mainframe!
                </p>
                <div className="my-[1rem] block md:hidden">
                    <RegisterBtn />
                </div>
            </div>
            <Image
                className="hidden md:block my-[12rem]"
                src="/CODE_CREATE_CONNECT.png"
                alt=""
                width={1920}
                height={1080}
            />
            <div className="block md:hidden text-center my-20 flex flex-col justify-center items-center space-y-5">
                <Image
                    src="/CODE.png"
                    alt=""
                    width={170}
                    height={100}
                />
                <Image
                    src="/CREATE.png"
                    alt=""
                    width={220}
                    height={100}
                />
                <Image
                    src="/CONNECT.png"
                    alt=""
                    width={270}
                    height={100}
                />
            </div>

            <div className=" mt-[10rem]">
                <h1 className="text-[2rem] md:text-[4rem] text-center mb-4" style={{ backgroundImage: 'linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    TRACKS
                </h1>
                <NextLink href="challenges" passHref>
                    <div className='cursor-pointer flex flex-wrap justify-center'>
                        <div className='rounded-[0.25rem] m-[0.8rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                            <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                <p className="text-white md:text-[2rem]">IOT</p>
                            </div>
                        </div>
                        <div className='rounded-[0.25rem] m-[0.8rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                            <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                <p className="text-white md:text-[2rem]">AI/ML</p>
                            </div>
                        </div>
                        <div className='rounded-[0.25rem] m-[0.8rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                            <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                <p className="text-white md:text-[2rem]">WEB 2</p>
                            </div>
                        </div>
                        <div className='rounded-[0.25rem] m-[0.8rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                            <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                <p className="text-white md:text-[2rem]">WEB 3</p>
                            </div>
                        </div>
                        <div className='rounded-[0.25rem] m-[0.8rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                            <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                <p className="text-white md:text-[2rem]">GAME DEV/ AR/ VR</p>
                            </div>
                        </div>
                        <div className='rounded-[0.25rem] m-[0.8rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                            <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                <p className="text-white md:text-[2rem]">CYBER SECURITY</p>
                            </div>
                        </div>
                        <div className='rounded-[0.25rem] m-[0.8rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                            <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                <p className="text-white md:text-[2rem]">OPEN INNOVATION</p>
                            </div>
                        </div>
                    </div>
                </NextLink>
            </div>
            <div className="flex justify-center my-[5rem] md:my-[12rem]">
                <div className="hidden md:block">
                    <Image
                        src="/whoshouldapplyimg.png"
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>
                <div className="m-4 md:ml-8">
                    <h1 className="text-[2rem] md:text-[3.5rem] mb-4" style={{ backgroundImage: 'linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                        WHO SHOULD APPLY?
                    </h1>
                    <div className="block md:hidden">
                        <Image
                            src="/whoshouldapplyimg.png"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                    <ul className="ml-[1rem] md:ml-[5rem] mt-[2rem] list-disc text-[2.5rem]">
                        <li className="text-[1.9rem] md:text-[2.7rem] mb-4">STUDENTS</li>
                        <div className="opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white" style={{ boxShadow: '0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF' }}></div>
                        <li className="text-[1.9rem] md:text-[2.7rem] my-4">ENTREPRENEURS</li>
                        <div className="opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white" style={{ boxShadow: '0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF' }}></div>
                        <li className="text-[1.9rem] md:text-[2.7rem] my-4">ENTHUSIASTS</li>
                        <div className="opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white" style={{ boxShadow: '0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF' }}></div>
                    </ul>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-0.5 bg-white rounded-[1rem] blur opacity-75"></div>
                <div className="flex flex-col bg-black rounded-[1rem] items-center justify-center mt-[12rem] relative">
                    <div className="mt-[2rem] md:m-[3.5rem]">
                        <h1 className="text-[2rem] md:text-[4rem] text-center mb-4" style={{ backgroundImage: 'linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                            HOW IT WORKS?
                        </h1>
                        <div className={`flex flex-col md:flex-row ${inter.className}`}>
                            <div className="flex flex-col justify-center items-center m-[2rem]">
                                <Image
                                    src="/section-image-1.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                                <p className="text-[1rem] text-center mt-[1rem]">
                                    HackJKLU is a 36-hour hackathon where students from all over the country come together to work in teams of 2 - 5 to build an innovative solution to a problem.
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
                                    Projects are evaluated by a panel of experts based on criteria such as innovation & execution. Teams receive feedback, fostering continuous improvement & learning.
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
