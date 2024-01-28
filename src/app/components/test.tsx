"use client";
import React, { useState } from 'react';
import NextLink from 'next/link';
import Header from '../components/header';

interface ChallengesProps { }

const Challenges: React.FC<ChallengesProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle category dropdown change
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    // Handle search button click
    const handleSearch = () => {
        // Implement your search logic here using searchTerm and selectedCategory
        console.log('Search Term:', searchTerm);
        console.log('Selected Category:', selectedCategory);
        // Add logic to fetch or display search results
    };

    // Options for the category dropdown
    const categoryOptions = [
        { value: 'all', label: 'All' },
        { value: 'ai_ml', label: 'AI/ML' },
        { value: 'cybersecurity', label: 'Cybersecurity' },
        { value: 'web2', label: 'Web2' },
        { value: 'web3', label: 'Web3' },
        { value: 'game_dev', label: 'Game Dev / AR / VR' },
        { value: 'iot', label: 'IoT' },
    ];

    return (
        <div>
            <Header />
            <div className="flex justify-center mt-[5rem] mx-[10rem] max-w-xl">
                <div className="relative">
                    <div className="absolute -inset-0.5 bg-white rounded-md blur opacity-75"></div>
                    <div className='flex relative'>
                        <button
                            className="p-2 bg-black text-white rounded-l-md"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                        <input
                            type="text"
                            className="p-2 border text-white bg-black rounded-none"
                            placeholder="Search for Challenges or filter by Track"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <select
                            className="p-2 border rounded-r-md bg-black text-white "
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            {categoryOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Your other content goes here */}
            </div>
        </div>
    );
};

export default Challenges;
