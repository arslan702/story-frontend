import React from 'react'
import Footer from '../Footer/Footer'

export default function Gallerycards() {
    return (
        <div className='bg-[#F5FBFF] font-Poppins pt-10  flex flex-col '>
            <div className="md:bg-white pt-6 pb-6 rounded-full mx-auto  md:w-[85%]  flex items-center  flex-wrap justify-center gap-5 mt-10      ">
                <input type="text" className="mx-3 md:mx-0 border-ring-0 w-full lg:w-[357px] active:right-0 hover:ring-0 active:border-none text-[#A3A3A3] bg-white border border-[#EEEEEE] p-3 px-8 rounded-3xl " placeholder="Search by title or description" />
                <select className="mx-3 md:mx-0 w-full lg:w-[357px] active:right-0 hover:ring-0 text-[#A3A3A3] bg-white border border-[#EEEEEE] p-3 px-8 rounded-3xl ">
                    <option>Character Type</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <button className="hidden lg:inlinetext-[#78AAD5] bg-white  border-2 border-[#78AAD5] p-3  rounded-3xl px-20 hover:opacity-80 active:scale-95">Reset</button>
                <button className="hidden lg:inline bg-[#78AAD5] text-white p-3  rounded-3xl px-20 hover:opacity-80 active:scale-95">Filter</button>

            </div>
            <div className='flex gap-y-3 mt-4  flex-row justify-between md:mx-10 lg:hidden'>
                <button className="text-[#78AAD5] bg-white  border-2 border-[#78AAD5] p-3  rounded-3xl w-[125px] hover:opacity-80 active:scale-95">Reset</button>
                <button className="bg-[#78AAD5] text-white p-3  rounded-3xl w-[125px] hover:opacity-80 active:scale-95">Filter</button>
            </div>

            {/* cards */}
            <div className='flex flex-col justify-center items-center mt-12 md:mt-24'>
                <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-8 w-[80%]'>
                    <div className='cursor-pointer'>
                        <img src="spider.svg" alt="" />
                    </div>
                    <div className='cursor-pointer'>
                        <img src="spider.svg" alt="" />
                    </div>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center mt-12 md:mt-18'>
                <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-8 w-[80%]'>
                    <div className='cursor-pointer'>
                        <img src="spider.svg" alt="" />
                    </div>
                    <div className='cursor-pointer'>
                        <img src="spider.svg" alt="" />
                    </div>
                </div>

            </div>
            <div className='mb-16 flex flex-col justify-center items-center mt-12 md:mt-18'>
                <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-8 w-[80%]'>
                    <div className='cursor-pointer'>
                        <img src="spider.svg" alt="" />
                    </div>
                    <div className='cursor-pointer'>
                        <img src="spider.svg" alt="" />
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}
