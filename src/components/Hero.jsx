import React from 'react';
import Navbar from './common/Navbar';
import { SOCIAL_LINKS } from '../utils/helper';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-header bg-no-repeat bg-cover bg-center min-h-[80vh] sm:min-h-screen flex flex-col relative !z-50">
            <div className='w-full h-[100px] z-[-2] sm:h-[204px] bg-bottom-blur-layer absolute bottom-[-30px] sm:bottom-0 left-0 right-0'>

            </div>
            <Navbar />
            <div className="flex-grow flex flex-col justify-center">
                <div className="container xl:max-w-[1304px] mx-auto px-3">
                    <h1 className='text-3xl sm:text-4xl lg:text-custom-5xl text-white font-bold font-orbitron !leading-120 max-w-[801px] text-center mx-auto'>
                        Save NANOSPACE World from Enemies
                    </h1>
                    <p className=' text-base sm:text-xl font-normal font-saira !leading-150 text-center text-white py-4 sm:pb-[46px]'>
                        Unleash ever-existing excitement with adorable girls armed with destructive gunfire.
                    </p>
                    <div className="flex gap-4 flex-wrap justify-center items-center ">
                        {SOCIAL_LINKS.map((data, index) => (
                            <div key={index}>
                                <Link to={data.path} target='_blank' rel='noreferrer' aria-label='open-links' className='rounded-xl overflow-hidden '>
                                    <img sizes='100vw' className='w-[118px] object-contain h-9 hover:scale-105 duration-300' src={data.icons} alt="social-links" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
