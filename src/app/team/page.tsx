import React from "react";
import Image from "next/image";
import Header from "../components/header";
import dataOC from '../data/dataOC.json';
import dataTeam from '../data/dataTeam.json';
import { Share_Tech_Mono, Inter } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ['400'] });
const inter = Inter({ subsets: ['latin'] })

const Team: React.FC = () => {
  const importedDataOC = dataOC;
  const importedDataTeam = dataTeam;

  return (
    <div>
      <Header />
      <div className={`mx-[1rem] md:mx-[5rem] lg:mx-[10rem] mt-[8rem] md:mt-16 ${tech_mono.className}`}>
        <section className="mb-16">
          <h3 className="text-xl md:text-[4rem] font-bold text-center my-[6rem] text-[#f58b40]">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)',
              }}
            >
              ORGANISING COMMITTEE
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[5rem] mx-[5rem]">
            {importedDataOC.map((member) => (
              <div key={member.name} className="flex flex-col items-center justify-center rounded-[1rem] shadow shadow-neon border border-cyan-800 p-4">
                <div className="mb-4 relative h-40 w-40 md:h-[14rem] md:w-[14rem] overflow-hidden rounded-md shadow-lg mx-auto">
                  <div className="w-full h-full overflow-hidden rounded-md">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-md"
                    />
                  </div>
                </div>
                <p className="font-bold text-base md:text-lg mb-2">{member.name}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-center text-cyan-200 hover:underline">
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[12.5rem]">
          <h3 className="text-xl md:text-[4rem] font-bold text-center my-[5rem] text-[#f58b40]">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)',
              }}
            >
              CORE COMMITTEE
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-[5rem]">
            {importedDataTeam.map((member) => (
              <div key={member.name} className="flex items-center mb-8">
                <div className="mr-4 relative h-20 w-20 md:h-40 md:w-40 overflow-hidden rounded-md shadow-lg">
                  <div className="w-full h-full overflow-hidden rounded-md">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover"}}
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-base md:text-[1.7rem] mb-[1rem]">{member.name}</p>
                  <p className="mb-2 text-base text-[1.2rem] my-[2rem]">{member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-200 hover:underline text-[1.1rem]">LinkedIn</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
