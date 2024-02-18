"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Share_Tech_Mono, Inter } from "next/font/google";
import itineraryData from "../data/itinerary.json";
import Timeline from "../components/timeline";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

interface TimelineEvent {
  time: string;
  event: string;
}

interface ItineraryData {
  day1Events: TimelineEvent[];
  day2Events: TimelineEvent[];
  day3Events: TimelineEvent[];
}

const Itinerary: React.FC = () => {
  const pathname = usePathname();
  const { day1Events, day2Events, day3Events } = itineraryData as ItineraryData;

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
    <div
      className={`${pathname === '/itinerary' ? 'block' : 'hidden md:block'} min-h-screen mx-[1rem] md:mx-0 my-[3rem] md:my-[15rem]`}
      id="itinerary-section"
    >
      <div className="container mx-auto">
        <h1
          className={`${tech_mono.className} text-[2rem] md:text-[4rem] text-center mb-4`}
          style={{
            backgroundImage:
              "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          ITINERARY
        </h1>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
          <div className="rounded-xl border-2 border-gray-500">
            <h2 className="text-center border-b-2 border-gray-500 text-lg font-semibold text-gray-300 bg-gray-800 px-4 py-2 rounded-t-xl">
              Day 1
            </h2>
            <Timeline
              events={day1Events}
              highlightEvents={["Opening Ceremony", "Workshop by JDW", "Hackathon Starts"]}
            />
          </div>
          <div className="border-2 border-gray-500 rounded-xl">
            <h2 className="text-center border-b-2 border-gray-500 text-lg font-semibold text-gray-300 bg-gray-800 px-4 py-2 rounded-t-xl">
              Day 2
            </h2>
            <Timeline
              events={day2Events}
              highlightEvents={[
                "Scavenger Hunt",
                "Coding Ninja Event",
                "Guest Speaker Session",
                "Improv Event",
                "Qawwali Night",
              ]}
            />
          </div>
          <div className="border-2 border-gray-500 rounded-xl">
            <h2 className="text-center border-b-2 border-gray-500 text-lg font-semibold text-gray-300 bg-gray-800 px-4 py-2 rounded-t-xl">
              Day 3
            </h2>
            <Timeline
              events={day3Events}
              highlightEvents={["DJ night by JDW", "Closing Ceremony"]}
            />
          </div>
        </div>
      </div>
      <button
        className={`fixed hidden md:block md:bottom-20 md:right-10 text-black py-2 px-4 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 z-50 ${inter.className}`}
        onClick={scrollToItinerary}
      >
        Go to Itinerary
      </button>
    </div>
  );
};

export default Itinerary;
