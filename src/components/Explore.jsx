import React from 'react'
import Logo from '../assets/images/svg/page-logo.svg'
import { EXPLORE_DATA_LISTS } from '../utils/helper'
const Explore = () => {
    return (
        <div className='bg-off-black'>
            <div className="container mx-auto px-3 xl:max-w-[1164px]">
                <div className='max-w-[672px] backdrop-blur-[10px] max-h-[464px] ml-auto rounded-[10px] bg-white !bg-opacity-[4%] p-[50px]'>
                    <img className='w-[234px] object-cover h-[73px]' src={Logo} alt="logo" />
                    <h2 className='text-custom-4xl leading-150 font-orbitron font-bold pt-6 pb-4 text-white'>Explore NANOSPACE</h2>
                    <p className='text-xl font-normal text-white font-saira leading-150'>Find best in class heart-pounding idle RPG experience</p>
                    <p className=' text-xl font-semibold font-saira text-gray leading-150 pt-2.5 pb-4'>Adorable, Collectible Anime-Inspired Character</p>
                    {EXPLORE_DATA_LISTS.map((data, index) => (
                        <div key={index} className='flex gap-2.5 items-start'>
                            <span className='min-w-4 min-h-4 bg-gray rounded-full border-[4px] border-light-black mt-1.5'>

                            </span>
                            <p className='text-gray max-w-[483px] font-normal text-base font-saira leading-150'>
                                {data}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Explore
