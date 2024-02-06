'use client'
import React from 'react'

export default function Plans() {


    return (
        <div className='bg-[#F5FBFF] flex flex-col pt-5 font-Poppins'>
            <div className='md:mb-[180px] mx-[80px] flex mt-5 justify-end items-center'>


                {/* <button className="bg-[#78AAD5] text-white p-3 rounded-3xl w-[246px] text-[12px] hover:opacity-80 active:scale-95">
                    Buy a Book
                </button> */}




            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-[40px] text-[#231D4F] font-semibold font-Fredoka'>Plans & Pricing </p>
                <p className='text-center text-[14px]'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>

            </div>
            {/* plans cards */}
            <div className="=   hover:cursor-pointer flex items-center flex-col md:flex-row md:justify-between gap-3 bg-[#fafdff] rounded-2xl w-full md:w-4/5 mx-auto md:px-10 md:mt-20  text-[#8e8da7]">
                <div className=" group py-10 hover:shadow-2xl shadow-[#6da0cb] hover:bg-[#6DA0CB] md:hover:w-[375px] md:hover:h-[445px] md:hover:scale-y-110 transition-all hover:text-white flex flex-col justify-between  w-full  md:w-1/3 px-5 h-[500px]  rounded-2xl">
                    <h2 className="group-hover:text-white text-3xl text-black  font-bold">$19<sub className="text-xs text-[#848199] group-hover:text-white font-normal">/ 1 book</sub></h2>
                    <p className="group-hover:text-white text-2xl font-medium text-black">Single book</p>
                    <p className="group-hover:text-white text-sm">Lorem upsum dolor sit amet</p>
                    <ul className="text-sm mt-10">
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"><img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                    </ul>
                    <button className="group-hover:bg-[#231D4F] w-full mt-10 bg-[#8e8da7] text-white p-3 px-8 rounded-3xl hover:opacity-80 active:scale-95">Choose plan</button>
                </div>
                <div className="group hover:cursor-pointer  hover:text-white py-10 hover:shadow-2xl shadow-[#6da0cb] md:hover:w-[375px] md:hover:h-[445px] hover:bg-[#6DA0CB] md:hover:scale-y-110 transition-all  flex flex-col justify-between w-full md:w-1/3 px-5 h-[500px]  rounded-2xl">
                    <h2 className="group-hover:text-white text-3xl text-black  font-bold">$54<sub className="text-xs font-normal text-[#848199] group-hover:text-white">/ 10 book</sub></h2>
                    <p className="text-2xl group-hover:text-white font-medium text-black">Bulk</p>
                    <p className="text-sm">Lorem upsum dolor sit amet</p>
                    <ul className="text-sm mt-10">
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /></span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /></span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"><img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> Lorem ipsum</li>
                    </ul>
                    <button className="group-hover:bg-[#231D4F] w-full mt-10 bg-[#8e8da7] text-white p-3 px-8 rounded-3xl hover:opacity-80 active:scale-95">Choose plan</button>
                </div>
                <div className="group  py-10   hover:shadow-2xl  shadow-[#6da0cb] hover:bg-[#6DA0CB] md:hover:w-[375px] md:hover:h-[445px] hover:cursor-pointer md:hover:scale-y-110 transition-all hover:text-white flex flex-col  justify-between w-full md:w-1/3 px-5 h-[500px]  rounded-2xl">
                    <h2 className="group-hover:text-white text-3xl text-black  font-bold">$89<sub className="text-xs font-normal text-[#848199] group-hover:text-white">/ month</sub></h2>
                    <p className="group-hover:text-white text-2xl font-medium text-black">Unlimited</p>
                    <p className="text-sm">Lorem upsum dolor sit amet</p>
                    <ul className="text-sm ">
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> books in your language</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span>limitless editing with canva integration</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> option for more text content per page</li>
                        <li className="flex items-center gap-1 p-1"> <span className="rounded-full bg-[#f5fbff] text-[#78AAD5]"> <img src="/tick.svg" alt="" /> </span> option for more text content per page</li>
                    </ul>
                    <button className="group-hover:bg-[#231D4F] w-full mt-10 bg-[#8e8da7] text-white p-3 px-8 rounded-3xl active:scale-95">
                        Choose plan</button>
                </div>
            </div>
        </div>

    )
}
