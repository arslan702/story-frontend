import React from 'react'

export default function Watchvideo() {
    return (
        <div className='flex flex-col pt-8 font-Poppins pb-12 bg-[#F5FBFF]'>
            <div className='mt-11'>
                <p className='text-center leading-none text-[#231D4F] text-[20px]  md:text-[35px] font-Fredoka font-bold
                '>Watch the video on how to easily and quickly <br className='hidden lg:inline' />
                    create a personalized book
                </p>
                {/* Embed YouTube video */}
                <div className=' flex justify-center items-center mt-11'>
                    <iframe
                        className='w-[200px] md:w-[1165px] md:h-[627px]'
                        src='https://www.youtube.com/embed/Imj_LQKyFFs'
                        title='YouTube video player'
                        // frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='flex justify-center items-center'>
                    <button className="text-[12px] w-[35%] md:w-[10%] mt-12 bg-[#78AAD5] text-white p-3  rounded-3xl   hover:opacity-80 active:scale-95">Create Now</button>

                </div>
            </div>


        </div>
    )
}
