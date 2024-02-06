import React from 'react'

export default function Personalstorybook() {
    return (
        <div className=' bg-[#E8F4FC] flex flex-col pb-20 font-Poppins'>
            <div className='flex flex-col gap-y-6 md:flex-row md:justify-between mt-10 mx-[30px] md:mx-[70px]'>
                <div className='flex flex-col mt-6'>
                    <div className='leading-tight text-[20px] lg:text-[40px] font-bold'>
                        <p>Your personal storybook made <br />  in <span className='text-[#78AAD5]'>3 minutes</span></p>
                    </div>
                    <div className='flex gap-x-2 mt-3'>
                        <div className='cursor-pointer h-[9px] w-[170px] rounded-full bg-[#78AAD5]'> </div>
                        <div className='cursor-pointer h-[9px] w-[33px] rounded-full bg-[#78AAD5]'> </div>
                        <div className='cursor-pointer h-[9px] w-[14px] rounded-full bg-[#78AAD5]'> </div>

                    </div>

                    <div className='mt-8 flex gap-y-2 text-[14px] lg:text-[18px] text-black flex-col'>
                        <div className='flex '>
                            <div className='text-black font-semibold'>
                                <p>Title: <span className='font-normal'> Dream of being Spiderman </span></p>
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='text-black text-breakable font-semibold'>
                                <p>Description: <span className='font-normal'> Charlie wanted to become a Spiderman, he bought <br className='hidden lg:inline' />
                                    himself Spiderman Outfit </span></p>
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='text-black font-semibold'>
                                <p>Characters: <span className='font-normal'>Charlie - a 6 year old boy </span></p>
                            </div>


                        </div>
                        {/* button */}
                        <div className='cursor-pointer mt-[30px] w-[220px] md:w-[240px] text-[16px] p-3 rounded-full flex gap-x-3 justify-center items-center  bg-[#78AAD5] text-white'>
                            <button>Create Now</button>
                            <img src="/rightarrow.svg" alt="" />
                        </div>

                    </div>

                </div>
                {/* right */}
                <div>
                    <img src="/spider.svg" alt="" />
                </div>
            </div>

        </div>
    )
}
