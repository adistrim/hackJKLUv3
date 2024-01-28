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
            

        </div>
    );
};

export default Challenges;
