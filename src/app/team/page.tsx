import React from 'react';
import OgPicCardList from '../components/ogPicCardList';

const ogData = [
  {
    imageSrc: 'team-photos/DivyaSharma.jpg',
    ogName: 'Divya Sharma',
    description: 'Organizing Committee'
  },
  {
    imageSrc: 'team-photos/Kushagra.jpg',
    ogName: 'Kushagra Pandey',
    description: 'Organizing Committee'
  },
  {
    imageSrc: 'team-photos/AnanyaSharma.jpg',
    ogName: 'Ananya Sharma',
    description: 'Organizing Committee'
  }
];

const Team = () => {
  const visibleogData = ogData.slice();

  return (
    <div>
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <OgPicCardList ogData={visibleogData} />
        </div>
      </div>
    </div>
  );
};

export default Team;
