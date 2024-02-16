"use client";
import React, { useState } from "react";
import { Share_Tech_Mono, Inter } from "next/font/google";
import challengesData from "../data/challenges.json";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

interface Challenge {
  id: string;
  title: string;
  track: string[];
  description: string;
}

const Challenges: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("All");

  const toggleDescription = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const filteredChallenges = challengesData.filter((challenge: Challenge) => {
    if (selectedOption === "All") {
      return (
        challenge.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return (
        challenge.track.includes(selectedOption) &&
        (challenge.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          challenge.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  });

  return (
    <div className="my-[1rem] md:my-[3rem] min-h-screen text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by ID or Title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-[0.8rem] md:text-base px-4 py-2 md:pr-10 w-80 md:w-96 bg-gray-800 text-white rounded-md border-2 border-gray-600 focus:outline-none focus:border-blue-300"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 pointer-events-none">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l4.5 4.5"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 20l-4.5-4.5"
                ></path>
                <circle cx="10" cy="10" r="8" strokeWidth="2"></circle>
              </svg>
            </span>
          </div>

          <select
            className="text-[0.8rem] md:text-base my-5 px-4 py-2 bg-gray-800 text-gray-400 rounded-md border border-gray-600 focus:outline-none focus:border-blue-300"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="All">All</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="GAME DEV/AR/VR">GAME DEV/AR/VR</option>
            <option value="IoT">IoT</option>
            <option value="Web 2">Web 2</option>
            <option value="Web 3">Web 3</option>
          </select>
        </div>
        {filteredChallenges.length === 0 && (
          <p className="text-center text-gray-400">
            Can't find any matches for the input search.
          </p>
        )}
        {filteredChallenges.map((challenge: Challenge) => (
          <div
            key={challenge.id}
            className={`${tech_mono.className} md:mb-[3rem] relative`}
          >
            <div className="flex flex-row items-center mt-[1rem] md:mt-[3rem] ">
              <span className="text-[#ECECEC] text-[2.5rem] md:text-[4.75rem] not-italic font-normal leading-[normal] tracking-[-0.54rem] text-shadow: 1px 3px 6px rgba(93, 213, 240, 0.4)">
                {challenge.id}
              </span>
              <span
                className={`ml-[2rem] text-white text-[0.8rem] md:text-2xl not-italic font-normal leading-[normal]`}
              >
                {challenge.title}
              </span>
            </div>
            <div className="flex mt-2 space-x-2 md:space-x-4 mb-[1.5rem]">
              {challenge.track.map((trackItem: string, index: number) => (
                <div key={index} className="items-center justify-center">
                  <div className="rounded-[0.25rem] bg-gradient-to-r from-[#1C4B79] to-[#5AD2ED] p-0.5">
                    <div className="rounded-[0.18rem] flex h-full w-full items-center justify-center bg-black back px-3 py-1">
                      <p className="text-white text-[0.5rem] md:text-[0.8rem]">
                        {trackItem}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex-grow"></div>
              <button
                className="px-2 py-1 bg-[#0d2339] text-white text-[0.5rem] md:text-[0.8rem] md:text-base rounded-md"
                onClick={() => toggleDescription(challenge.id)}
              >
                {expandedId === challenge.id ? "Hide" : "Show"}
              </button>
            </div>
            <div
              className="absolute opacity-30 w-full h-0.5 bg-gradient-to-r from-white via-white to-white"
              style={{
                boxShadow:
                  "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
              }}
            ></div>
            {expandedId === challenge.id && (
              <div
                className={`mt-2 bg-gray-900 text-white text-[0.8rem] md:text-base rounded-md p-4 ${inter.className} `}
              >
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
