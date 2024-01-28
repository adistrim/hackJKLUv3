"use client";
import React from 'react';
import NextLink from 'next/link';

const Footer: React.FC = () => {

    const iframeWrapperStyle = {
        width: '45rem',
        height: '25rem',
    };

    return (
        <footer className="bg-[#121212] mt-[10rem] text-white p-8">
            <div className='mx-[3rem]'>
                <div className="flex justify-between items-start">
                    {/* Left Side */}
                    <div className="w-40%">
                        <div
                            className="apply-button"
                            data-hackathon-slug="hackjklu3"
                            data-button-theme="dark-inverted"
                            style={{ height: "44px", width: "312px" }}
                        >
                            Register Now
                        </div>
                        <NextLink href="https://devfolio.co/" passHref>
                            <p className="inline-flex px-8 py-3 text-black text-[1.3rem] justify-center items-center gap-4 rounded-md bg-gradient-to-r from-red-600 to-yellow-500">
                                Register Now
                            </p>
                        </NextLink>

                        <div className="mt-[2rem] mr-[7rem] mb-[2rem]">
                            <h4 className="text-[1.5rem] text-[#E16931] mb-[1.5rem]">ADDRESS</h4>
                            <p className='text-[1.1rem] font-thin'>JK LAKSHMIPAT UNIVERSITY, P.O. 302 026, MAHAPURA RD, NEAR MAHINDRA SEZ, MAHAPURA, RAJASTHAN 302026</p>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-[1.5rem] text-[#E16931] font-base mb-[1.5rem]">CONTACT INFO</h4>
                            <p className='mb-[0.5rem] font-thin'>Email: contact@hackjklu.com</p>
                            <p className='mb-[1rem] font-thin'>Phone: +91 9804567890</p>
                            <a href="https://instagram.com" className="text-white">
                                <img src="instagram-logo.png" alt="Instagram" className="w-12 h-12 inline-block" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side (Google Maps) */}
                    <div className="w-60%">
                        <div style={iframeWrapperStyle}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center mt-8">
                    <div className='flex flex-row items-center'>
                        <img src="hackjklu-logo.png" alt="Logo" className='h-16' />
                        <img src="hackjklu-text.png" alt="HackJKLU" className='h-12 ml-2 mt-2' />
                    </div>
                    <p className='mx-auto'>&copy;2024 HackJKLU. All rights reserved.</p>
                    <div>
                        <span className="text-gray-400 text-sm">Made with ❤️ by </span>
                        <NextLink href="https://github.com/adistrim/" target='_blank' passHref>
                            <span className="text-gray-400 text-sm">@adistrim</span>
                        </NextLink>
                        <span className="text-gray-400 text-sm"> | </span>
                        <NextLink href="https://github.com/adistrim/hackJKLUv3/" target='_blank' passHref>
                            <span className="text-gray-400 text-sm">source code</span>
                        </NextLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
