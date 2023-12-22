import React from 'react';

interface OgPicCardProps {
  imageSrc: string;
  ogName: string;
  description: string;
}

const OgPicCard: React.FC<OgPicCardProps> = ({ imageSrc, ogName, description }) => {

  return (
    <div className="flex justify-center items-center justify-around m-[3.125rem];">
      <div className="w-[13.5rem] h-[15rem] bg-transparent text-center relative overflow-hidden mr-2.5 rounded-[2.5rem] border-2 border-solid border-[#121212]">
        <img className="w-full h-full transition-transform duration-[0.25s] ease-[ease-in-out] px-[1.5rem] py-[1.635rem] rounded-[3.3rem] scale-125 hover:scale-[130%]" src={`${imageSrc}`} alt={`${ogName} Image`} />
        <div>
          <h2 className="absolute w-full text-[white] font-bold opacity-100 p-2.5 left-0 bottom-0">{ogName}</h2>
          <p className='absolute w-full text-[white] font-[lighter] opacity-0 p-2.5 left-0 bottom-0'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OgPicCard;

