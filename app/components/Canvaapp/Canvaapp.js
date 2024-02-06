import React from 'react'

export default function Canvaapp() {
    return (
        <div className=' md:relative bg-[#E8F4FC] pt-14 flex flex-col pb-10 font-Poppins'>
            <div className='flex flex-col gap-y-6 md:flex-row gap-x-3 md:justify-between mt-10 md:mr-[60px]'>
                {/* left */}
                <div className='mx-auto  md:ml-[30px] mt-4 z-[2]'>
                    <img src="/leftwali.svg" alt="" />
                </div>
                <div className='hidden md:inline absolute bottom-0  '>
                    <img src="/down.svg" alt="" />
                </div>
                <div className='mx-[20px] md:mx-0 z-[2] flex flex-col mt-6'>
                    <div className='leading-tight text-[18px] lg:text-[40px] font-bold'>
                        <p>Endless customizability with Canva <br className='hidden lg:inline' />  for truly <span className='text-[#78AAD5]'>Personal Storybook</span></p>
                    </div>
                    <div className='flex gap-x-2 mt-3'>
                        <div className='cursor-pointer h-[9px] w-[170px] rounded-full bg-[#78AAD5]'> </div>
                        <div className='cursor-pointer h-[9px] w-[33px] rounded-full bg-[#78AAD5]'> </div>
                        <div className='cursor-pointer h-[9px] w-[14px] rounded-full bg-[#78AAD5]'> </div>

                    </div>

                    <div className='mt-8 flex gap-y-2 text-[14px] lg:text-[18px] text-black flex-col'>
                        <div className='flex '>
                            <div className='font-normal text-black '>
                                <p>We have integrated our application with canva - you can now <br className='hidden xl:inline' />
                                    efortlessly use generated illustration and text to create a fully <br className='hidden xl:inline' />
                                    unique book.</p>
                            </div>
                        </div>

                        {/* button */}
                        <div className='cursor-pointer mt-[30px] w-[220px] md:w-[240px] text-[16px] p-3 rounded-full flex gap-x-3 justify-center items-center  bg-[#78AAD5] text-white'>
                            <button>Canva App</button>
                            <img src="/rightarrow.svg" alt="" />
                        </div>

                    </div>

                </div>
                {/* right */}

            </div>

        </div>
    )
}
