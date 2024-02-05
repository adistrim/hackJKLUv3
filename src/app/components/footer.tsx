"use client";
import React from 'react';
import NextLink from 'next/link';
import RegisterBtn from './registerbtn';

const Footer: React.FC = () => {

    // const iframeWrapperStyle = {
    //     width: '45rem',
    //     height: '25rem',
    // };

    return (
        <footer className="bg-[#121212] mt-[10rem] text-white p-5 md:p-8">
            <div className='md:mx-[3rem]'>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Left Side */}
                    <div className="w-full md:w-50% lg:40% flex flex-col">
                        
                        <RegisterBtn />

                        <div className="mt-[2rem] md:mr-[7rem] mb-[2rem]">
                            <h4 className="text-[1rem] md:text-[1.5rem] text-[#E16931] mb-[1.5rem]">ADDRESS</h4>
                            <p className='text-[0.7rem] md:text-[1.1rem] font-thin'>JK LAKSHMIPAT UNIVERSITY, P.O. 302 026, MAHAPURA RD, NEAR MAHINDRA SEZ, MAHAPURA, RAJASTHAN 302026</p>
                        </div>

                        <div className="my-4">
                            <h4 className="text-[1rem] md:text-[1.5rem] text-[#E16931] font-base mb-[1.5rem]">CONTACT INFO</h4>
                            <p className='md:mb-[0.5rem] text-[0.7rem] md:text-[1.2rem] font-thin'>Email: contact@hackjklu.com</p>
                            <p className='md:mb-[1rem] text-[0.7rem] md:text-[1.2rem] font-thin'>Phone: +91 9804567890</p>
                            <a href="https://instagram.com" className="text-white font-thin  text-[0.7rem] md:text-[1.2rem]">Follow us:
                                <img src="instagram-logo.png" alt="Instagram" className="h-6 md:h-8 inline-block" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side (Google Maps) */}
                    <div className="w-full md:w-50% lg:w-60%">
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                className='relative w-full h-[15rem] md:h-[15rem] md:w-[25rem] lg:h-[25rem] lg:w-[45rem] rounded-md'
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                    <div className='flex flex-row items-center'>
                        <img src="hackjklu-logo.png" alt="Logo" className='h-8 md:h-16' />
                        <img src="hackjklu-text.png" alt="HackJKLU" className='h-6 md:h-12 ml-2 mt-2' />
                    </div>
                    <p className='my-[1rem] text-[0.7rem] md:text-base mx-auto'>&copy;2024 HackJKLU. All rights reserved.</p>
                    <div>
                        <span className="text-gray-400 text-[0.7rem] md:text-sm">Made with ❤️ by </span>
                        <NextLink href="https://github.com/adistrim/" target='_blank' passHref>
                            <span className="text-gray-400 text-[0.7rem] md:text-sm">@adistrim</span>
                        </NextLink>
                        <span className="text-gray-400 text-[0.7rem] md:text-sm"> | </span>
                        <NextLink href="https://github.com/adistrim/hackJKLUv3/" target='_blank' passHref>
                            <span className="text-gray-400 text-[0.7rem] md:text-sm">source code</span>
                        </NextLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
