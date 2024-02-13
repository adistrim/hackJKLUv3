import React from "react";

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
      <div className="h-full w-px bg-gray-500 absolute left-0" style={{ boxShadow: '0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF' }}></div>
      <div className="flex flex-col items-start">
        {events.map((event, index) => (
          <div key={index} className="flex items-start my-4">
            <div
              className={`absolute left-0 transform -translate-x-1/2 bg-gray-700 text-white
            font-semibold px-3 py-2 rounded-full text-sm ${
              highlightEvents && highlightEvents.includes(event.event) ? 'bg-gradient-to-r from-orange-500 to-red-500 text-black' : ''
            }`}
            >
              {event.time}
            </div>
            <div className="bg-gray-800 text-gray-200 px-4 py-3 rounded-lg ml-[3.5rem]">
              {event.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Itinerary: React.FC = () => {
  const day1Events: TimelineEvent[] = [
    { time: "12:00 PM", event: "Check-in starts" },
    { time: "02:00 PM", event: "Check-in Closes" },
    { time: "02:00 PM", event: "Opening Ceremony" },
    { time: "03:00 PM", event: "Workshop by JDW" },
    { time: "05:00 PM", event: "Workshop Ends" },
    { time: "05:00 PM", event: "High Tea" },
    { time: "06:00 PM", event: "Hackathon Starts" },
    { time: "08:00 PM", event: "Dinner" },
    { time: "10:00 PM", event: "Dinner Closes" },
  ];

  const day2Events: TimelineEvent[] = [
    { time: "08:00 AM", event: "Breakfast" },
    { time: "10:00 AM", event: "Scavenger Hunt" },
    { time: "12:00 PM", event: "Lunch" },
    { time: "01:00 PM", event: "Coding Ninja Event" },
    { time: "03:00 PM", event: "Guest Speaker Session" },
    { time: "04:00 PM", event: "Improv Event" },
    { time: "05:00 PM", event: "High Tea" },
    { time: "08:00 PM", event: "Dinner" },
    { time: "09:00 PM", event: "Kawali Night" },
  ];

  const day3Events: TimelineEvent[] = [
    { time: "06:00 AM", event: "Soft Deadline" },
    { time: "06:00 AM", event: "Submission Starts" },
    { time: "08:00 AM", event: "Submission Closes" },
    { time: "08:00 AM", event: "Breakfast" },
    { time: "09:00 AM", event: "Judging Starts" },
    { time: "01:00 PM", event: "Judging Closes" },
    { time: "12:00 PM", event: "Lunch" },
    { time: "02:00 PM", event: "Closing Ceremony" },
    { time: "07:00 PM", event: "DJ night by JDW" },
  ];

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
    <div className="min-h-screen my-[8rem] md:my-[15rem]" id="itinerary-section">
      <div className="container mx-auto">
        <h1
          className="text-[2rem] md:text-[4rem] text-center mb-4"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Itinerary
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" rounded-xl border-2 border-gray-500">
            <Timeline events={day1Events} highlightEvents={["Opening Ceremony", "Workshop by JDW"]} />
          </div>
          <div className="border-2 border-gray-500 rounded-xl">
            <Timeline events={day2Events} highlightEvents={["Scavenger Hunt", "Coding Ninja Event", "Guest Speaker Session", "Improv Event", "Kawali Night"]} />
          </div>
          <div className="border-2 border-gray-500 rounded-xl">
            <Timeline events={day3Events} highlightEvents={["DJ night by JDW", "Closing Ceremony"]} />
          </div>
        </div>
      </div>
      <button
        className="fixed hidden md:block md:bottom-20 md:right-10 text-black py-2 px-4 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 z-50"
        onClick={scrollToItinerary}
      >
        Go to Itinerary
      </button>
    </div>
  );
};

export default Itinerary;
