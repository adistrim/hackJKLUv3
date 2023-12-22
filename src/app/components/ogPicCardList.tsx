import React from 'react';
import OgPicCard from './ogPicCard';

interface OgPicCardListProps {
  ogData: {
    imageSrc: string;
    ogName: string;
    description: string;
  }[];
}

const OgPicCardList: React.FC<OgPicCardListProps> = ({ ogData }) => {
  return (
    <div className="cards flex flex-row items-center space-x-6">
      {ogData.map((og, index) => (
        <OgPicCard
          key={index}
          imageSrc={og.imageSrc}
          ogName={og.ogName}
          description={og.description}
        />
      ))}
    </div>
  );
};

export default OgPicCardList;
