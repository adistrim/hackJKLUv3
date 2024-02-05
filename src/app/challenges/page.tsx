import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Share_Tech_Mono, Inter } from 'next/font/google';
import challengesData from '../data/challenges.json';

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ['400'] });
const inter = Inter({ subsets: ['latin'] });

const Challenges: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='mx-[0.5rem] md:mx-[10rem] my-[4rem] md:my-[5rem] max-w-screen-xl'>
                {challengesData.map((challenge) => (
                    <div key={challenge.id} className={`${tech_mono.className} md:mb-[3rem] relative`}>
                        <div className='flex flex-row items-center '>
                            <span className='text-[#ECECEC] text-[2.5rem] md:text-[4.75rem] not-italic font-normal leading-[normal] tracking-[-0.54rem] text-shadow: 1px 3px 6px rgba(93, 213, 240, 0.4)'>{challenge.id}</span>
                            <span className={`ml-[2rem] text-white text-[0.7rem] md:text-2xl not-italic font-normal leading-[normal] ${inter.className}`}>{challenge.title}</span>
                        </div>
                        <div className="flex mt-2 space-x-2 md:space-x-4 mb-[1.5rem]">
                            {challenge.track.map((trackItem, index) => (
                                <div key={index} className='items-center justify-center'>
                                    <div className='rounded-[0.25rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                                        <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                            <p className="text-white text-[0.5rem] md:text-[0.8rem]">{trackItem}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white" style={{ boxShadow: '0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF' }}></div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Challenges;
