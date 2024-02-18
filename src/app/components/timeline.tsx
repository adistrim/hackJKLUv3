import React from "react";
import { Share_Tech_Mono, Inter } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

interface TimelineEvent {
  time: string;
  event: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  highlightEvents?: string[];
}

const Timeline: React.FC<TimelineProps> = ({ events, highlightEvents }) => {
  return (
    <div className="relative ml-[3.5rem]">
      <div
        className="h-full w-px bg-gray-500 absolute left-0"
        style={{
          boxShadow:
            "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
        }}
      ></div>
      <div className="flex flex-col items-start">
        {events.map((event, index) => (
          <div key={index} className="flex items-start my-2.5">
            <div
              className={`${tech_mono.className} absolute left-0 transform -translate-x-1/2 bg-gray-700 text-white
            font-semibold px-3 py-2 rounded-full text-sm ${
              highlightEvents && highlightEvents.includes(event.event)
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-black"
                : ""
            }`}
            >
              {event.time}
            </div>
            <div className={`text-gray-200 px-3 py-3 ml-[3rem] text-[0.9rem] ${inter.className}`}>
              {event.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
