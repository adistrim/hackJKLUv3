"use client";
import React from 'react';
import NextLink from 'next/link';
import Header from '../components/header';

const Challenges = () => {

    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold mb-4">Challenges</h1>
                    <NextLink href="/" passHref>
                        <span className="cursor-pointer hover:underline">Back</span>
                    </NextLink>
                </div>
            </div>
        </div>
    );
};

export default Challenges;
