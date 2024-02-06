import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Hero() {
    return (
        <div className='lg:relative overflow-hidden flex flex-col bg-[#F5FBFF]  pb-[140px]'>
            <div className=' absolute left-0  '>
                <img src="/bars.svg" alt="" className='hidden lg:w-[300px] lg:inline xl:w-[500px] 2xl:w-auto' />
            </div>
            <Navbar />
            {/* text */}
            <div className='lg:relative font-bold mx-3 md:ml-[70px] mt-10 font-Fredoka  flex flex-col '>
                <div className='lg:absolute right-0 z-[4]'>
                    <img src="/rightbnda.svg" alt=""
                        className='hidden lg:inline lg:h-[300px] xl:h-auto xl:w-auto'
                    />

                </div>
                <div className='absolute right-0  '>
                    <img src="/rightblos.svg" alt="" className='hidden lg:w-[300px] lg:inline xl:w-[500px] 2xl:w-auto' />
                </div>

                {/* heading */}
                <div className='flex text-[25px] md:text-[40px] lg:text-[76px] flex-col leading-none'>
                    <div className='text-[#000000]'>
                        <p>Your Personalized</p>
                    </div>
                    <div className='text-[#78AAD5]'>
                        <p>Storybook</p>
                    </div>
                </div>
                {/* para */}
                <div className='p-2 md:p-0 mt-[15px] md:mt-[40px] flex flex-col gap-y-2'>
                    <div className='text-[14px] md:text-[22px] font-bold font-Poppins'>
                        <p>Create a Book That Will Spark Your Child&apos;s Imagination</p>
                    </div>
                    <div className=' text-[14px] md:text-[16px] font-normal text-[#575757] font-Poppins'>
                        <p>
                            Create a unique children&apos;s story with our easy-to-use ai storybook maker. Our <br className='hidden lg:inline' />
                            personalized children&apos;s books are fully customized with original characters, <br className='hidden lg:inline' />
                            illustrations, and an imaginative plot. Our text-to-speech narration feature makes <br className='hidden lg:inline' />
                            reading even more fun and engaging. Start creating your own children&apos;s story today!
                        </p>
                    </div>

                </div>
                {/* button */}
                <div className='cursor-pointer mt-[30px] w-[220px] md:w-[270px] text-[16px] p-3 rounded-full flex gap-x-3 justify-center items-center  bg-[#78AAD5] text-white'>
                    <button>Create Now</button>
                    <img src="/rightarrow.svg" alt="" />
                </div>
                {/* indicators */}
                <div className='hidden md:flex justify-center items-center mt-20'>
                    <div className='flex gap-x-1'>
                        <div className='cursor-pointer h-[9px] w-[40px] rounded-full bg-[#78AAD5]'> </div>
                        <div className='cursor-pointer h-[9px] w-[14px] rounded-full bg-[#D9D9D9]'> </div>
                        <div className='cursor-pointer h-[9px] w-[14px] rounded-full bg-[#D9D9D9]'> </div>
                        <div className='cursor-pointer h-[9px] w-[14px] rounded-full bg-[#D9D9D9]'> </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
