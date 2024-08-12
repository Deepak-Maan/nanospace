import React from 'react'
import Logo from '../assets/images/svg/page-logo.svg'
import CartoonGirl from '../assets/images/webp/cartoon-girl.webp'
import CartoonRobot from '../assets/images/webp/robot-face.webp'
import { EXPLORE_DATA_LISTS } from '../utils/helper'
const Explore = () => {
    return (
        <div className='bg-off-black py-12 sm:py-16 md:py-20 lg:py-24 xl:pt-[180px] xl:pb-[186px] mt-[-1px] overflow-hidden'>
            <div className="container mx-auto px-3 xl:max-w-[1164px] relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 relative ">
                    <img className='lg:absolute relative w-[350px] h-[400px] md:w-[400px] md:h-[500px] mx-auto lg:w-[600px] lg:h-[800px] xl:w-[880px] xl:h-[1071px] object-cover lg:left-0 xl:left-[-10%] lg:bottom-[-60%] xl:bottom-[-90%]' src={CartoonGirl} alt="girl-image" />
                    <div className='max-w-[672px] backdrop-blur-[10px] xl:max-h-[464px] max-lg:mx-auto lg:col-span-2 ml-auto rounded-[10px] bg-white !bg-opacity-[4%] p-4 sm:p-8 md:p-[50px] relative'>
                        <img className='absolute md:top-[-70px] lg:-top-[116px] -top-[50px] right-0 sm:right-[-70px] lg:right-0 xl:right-[-50px] pointer-events-none w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px]  xl:h-[256px] xl:w-[256px]' src={CartoonRobot} alt="robot" />
                        <img className='sm:w-[234px] object-cover w-[170px] h-[50px] sm:h-[73px]' src={Logo} alt="nanospace-logo" />
                        <h2 className='text-2xl sm:text-3xl lg:text-custom-4xl !leading-150 font-orbitron font-bold py-4 sm:pt-6 pb-4 text-white'>Explore NANOSPACE</h2>
                        <p className='text-base sm:text-xl font-normal text-white font-saira !leading-150'>Find best in class heart-pounding idle RPG experience</p>
                        <p className=' text-base sm:text-xl font-semibold font-saira text-gray !leading-150 pt-2.5 pb-4'>Adorable, Collectible Anime-Inspired Character</p>
                        {EXPLORE_DATA_LISTS.map((data, index) => (
                            <div key={index} className='flex gap-2.5 items-start'>
                                <span className='min-w-4 min-h-4 bg-gray rounded-full border-[4px] border-light-black mt-1.5'>
                                </span>
                                <p className={`text-gray max-w-[483px] font-normal text-sm sm:text-base font-saira !leading-150 ${index === 0 && "pb-4"}`}>
                                    {data}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
