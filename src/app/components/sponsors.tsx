import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dataSponsors from "../data/sponsors.json";
import { Share_Tech_Mono, Inter, Space_Mono } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const Sponsors: React.FC = () => {
  const importedDataOC = dataSponsors;
  const pathname = usePathname();

  return (
    <div
      className={`${pathname === "/sponsors" ? "block" : "md:block"} ${tech_mono.className} min-h-screen mx-[1rem] my-[3rem] md:my-[10rem]`}
      id="sponsor-section"
    >
      <div className="bg-black">
        <div
          className={`mx-[1rem] md:mx-[5rem] lg:mx-[2rem] mt-8 md:mt-16 ${tech_mono.className}`}
        >
          <section className="mb-1 md:mb-16">
            <h3 className="text-[3rem] md:text-[4rem] font-bold text-center my-[2rem] md:my-[6rem] text-[#f58b40]">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #C33C39 7.95%, #E69235 94.22%)",
                }}
              >
                SPONSORS
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[5rem] mx-[1rem] md:mx-[3rem]">
              {importedDataOC.map((member) => (
                <div key={member.name} className="relative">
                  <div className="relative flex flex-row md:flex-col items-center bg-black justify-between md:justify-center rounded-[1rem] p-2 md:p-2">
                    <div className="md:mb-4 relative h-[10rem] align-middle w-[20rem] md:h-[14rem] md:w-[14rem] overflow:fill rounded-md shadow-lg ">
                      <div className="w-full h-full overflow:auto rounded-md">
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center text-cyan-200 hover:underline"
                        >
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            style={{ objectFit: "contain" }}
                            className="rounded-md"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
