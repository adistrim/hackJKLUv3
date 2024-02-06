"use client";
import React, { useState } from 'react';
import { Share_Tech_Mono, Inter } from 'next/font/google';
import challengesData from '../data/challenges.json';

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ['400'] });
const inter = Inter({ subsets: ['latin'] });

interface Challenge {
    id: string;
    title: string;
    track: string[];
    description: string;
}

const Challenges: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleDescription = (id: string) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    return (
        <div>
            <div className='mx-[1rem] md:mx-[10rem] my-[4rem] md:my-[5rem] max-w-screen-xl'>
                {challengesData.map((challenge: Challenge) => (
                    <div key={challenge.id} className={`${tech_mono.className} md:mb-[3rem] relative`}>
                        <div className='flex flex-row items-center mt-[3rem] '>
                            <span className='text-[#ECECEC] text-[2.5rem] md:text-[4.75rem] not-italic font-normal leading-[normal] tracking-[-0.54rem] text-shadow: 1px 3px 6px rgba(93, 213, 240, 0.4)'>{challenge.id}</span>
                            <span className={`ml-[2rem] text-white text-[0.8rem] md:text-2xl not-italic font-normal leading-[normal]`}>{challenge.title}</span>
                        </div>
                        <div className="flex mt-2 space-x-2 md:space-x-4 mb-[1.5rem]">
                            {challenge.track.map((trackItem: string, index: number) => (
                                <div key={index} className='items-center justify-center'>
                                    <div className='rounded-[0.25rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5'>
                                        <div className='rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1'>
                                            <p className="text-white text-[0.5rem] md:text-[0.8rem]">{trackItem}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex-grow"></div>
                            <button className="px-2 py-1 bg-[#1C4B79] text-white text-[0.8rem] md:text-base rounded-md" onClick={() => toggleDescription(challenge.id)}>
                                {expandedId === challenge.id ? "Hide" : "Show"}
                            </button>
                        </div>
                        <div className="absolute opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white" style={{ boxShadow: '0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF' }}></div>
                        {expandedId === challenge.id && (
                            <div className="mt-2 bg-gray-800 text-white text-[0.8rem] md:text-base rounded-md p-4">
                                <p>{challenge.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Challenges;
