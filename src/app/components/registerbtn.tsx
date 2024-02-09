import React from "react";
import NextLink from "next/link";
import { Share_Tech_Mono } from "next/font/google";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

const RegisterBtn: React.FC = () => {
    return (
        <NextLink href="https://hack-jklu.devfolio.co/" passHref target="_blank">
            <p className={`inline-flex px-8 py-3 text-black text-[1.1rem] md:text-[1.3rem] justify-center items-center gap-4 rounded-md bg-gradient-to-r from-red-600 to-yellow-500 ${tech_mono.className}`}>
                Register Now
            </p>
        </NextLink>
    );
};

export default RegisterBtn;