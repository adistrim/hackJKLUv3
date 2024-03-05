import React from 'react';
import Image from 'next/image';

interface Sponsor {
    name: string;
    photo: string;
    website: string;
    type?: string;
}

interface SponsorComponentProps {
    sponsor: Sponsor;
}

const SponsorComponent: React.FC<SponsorComponentProps> = ({ sponsor }) => {
    return (
        <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-2">
                <Image src={sponsor.photo} alt={sponsor.name} layout="fill" objectFit="contain" />
            </div>
            {sponsor.type && <span className="text-sm text-gray-500">{sponsor.type}</span>}
        </a>
    );
};

export default SponsorComponent;
