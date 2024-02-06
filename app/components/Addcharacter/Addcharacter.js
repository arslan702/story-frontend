// 'use client'
import React from 'react'
// import Loginform from '../Loginform/Loginform'

export default function Addcharacter() {
    return (
        <>
            <div className='bg-[#F5FBFF]  '>
                <div className='flex flex-col md:flex-row gap-x-3 bg-white p-2 md:p-4  md:mx-[90px]'>
                    {/* left */}
                    <div className=' md:w-[50%]  flex flex-col rounded-lg bg-[#E0ECF6]'>
                        <div className='pb-11 pl-7 flex flex-col gap-y-2 text-black p-3 '>
                            {/* <p className='font-Fredoka font-medium text-[18px] lg:text-[37px]'>Your Personalized <span className='text-[#78AAD5]'>Storybook</span> </p> */}
                            {/* <p className='font-Poppins font-semibold text-[14px] text-center md:text-start lg:text-[20px]'>Create a Book That Will Spark Your Child&apos;s Imagination </p> */}
                        </div>
                        <div>
                            <img src="/chi.svg" alt="" />
                        </div>
                    </div>

                    {/* right  */}
                    <div className='relative md:w-[50%] '>
                        <div className='text-[14px]'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br className='hidden lg:inline' /> Aenean commodo
                                ligula eget dolor.Lorem ipsum dolor sit <br className='hidden lg:inline' />
                                amet, consectetuer adipiscing elit.
                                Aenean commodo ligula <br className='hidden lg:inline' /> eget dolor.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing <br className='hidden lg:inline' />
                                elit. Aenean commodo ligula eget dolor.</p>
                        </div>
                        {/* <Loginform /> */}
                        <div className='flex flex-col mt-5 gap-y-2'>
                            <p className='font-semibold'>Title</p>
                            <input type="text" className="border-ring-0 lg:w-[357px] active:right-0 hover:ring-0 active:border-none text-[#A3A3A3] bg-white border border-[#EEEEEE] p-3 px-8 rounded-3xl " placeholder="Search by title or description" />


                        </div>
                        <div className='flex flex-col mt-5 gap-y-2'>
                            <p className='font-semibold'>Description</p>
                            <textarea
                                className="border-ring-0 lg:w-[522px] active:right-0 hover:ring-0 
                             active:border-none text-[#A3A3A3] bg-white border border-[#EEEEEE] 
                             p-3 px-8 rounded-3xl " placeholder="Search by title or description"
                                name="" id="" cols="30" rows="10">

                            </textarea>
                        </div>

                        <div className='flex flex-col mt-5'>
                            <p className='font-semibold'>Character List</p>
                            <div className='flex flex-wrap gap-y-3 mt-4 gap-x-3'>
                                <img src="/del.svg" alt="" />
                                <input type="text" className="border-ring-0 
                                lg:w-[357px] active:right-0 hover:ring-0 active:border-none text-[#A3A3A3]
                                 bg-white border border-[#EEEEEE] p-3 px-8 rounded-3xl "
                                    placeholder="Enter Name" />

                                <select className="cursor-pointer lg:w-[162px] active:right-0 hover:ring-0 text-[#A3A3A3] bg-white border border-[#EEEEEE] p-3 px-8 rounded-3xl ">
                                    <option>Human</option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className=' flex mt-5 justify-center items-center'>
                            <button className="bg-[#78AAD5] text-white p-3 
                             rounded-3xl px-20 md:w-[405px] hover:opacity-80 active:scale-95">
                                Add named Character
                            </button>


                        </div>
                    </div>

                </div>
            </div>
            <div className=' flex justify-center lg:justify-end items-center lg:mx-[120px] relative lg:top-[100px]'>
                <button className="bg-[#78AAD5] text-white p-3 rounded-3xl w-[200px] lg:w-[246px] text-[12px] hover:opacity-80 active:scale-95">
                    Buy a Book
                </button>
            </div>
        </>
    )
}
