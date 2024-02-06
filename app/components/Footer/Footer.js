import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#EAF6FC] flex flex-col pb-[50px] '>
            <img src="/foor.svg" alt="" className='absolute' />
            <div className='z-[2] grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-4  mt-[70px] p-3 md:p-0 md:ml-[68px]'>
                <div className='flex flex-col'>
                    <div className='cursor-pointer'>
                        <img src="/loginlogo.svg" alt="" />
                    </div>
                    <p className=' text-[16px] text-breakable '>
                        Lorem ipsum dolor sit amet,consectetur <br className='hidden 2xl:inline' />
                        adipiscing elit. Vulputate a, ultricies sit nunc <br className='hidden 2xl:inline' />
                        purus vel cras pellentesque.
                    </p>
                    {/* icons */}
                    <div className='flex gap-x-4 mt-5'>
                        <div className='cursor-pointer bg-[#DCF0FFA1] flex justify-center items-center rounded-full h-[45px] w-[45px]'>
                            <img src="/dribbble.svg" alt="" />
                        </div>
                        <div className='cursor-pointer bg-[#DCF0FFA1] flex justify-center items-center rounded-full h-[45px] w-[45px]'>
                            <img src="/instagram.svg" alt="" />
                        </div>

                        <div className='cursor-pointer bg-[#DCF0FFA1] flex justify-center items-center rounded-full h-[45px] w-[45px]'>
                            <img src="/facebook.svg" alt="" />
                        </div>

                        <div className='cursor-pointer bg-[#DCF0FFA1] flex justify-center items-center rounded-full h-[45px] w-[45px]'>
                            <img src="/twitter.svg" alt="" />
                        </div>

                    </div>

                </div>



                <div className=' lg:mr-12 flex flex-col  relative lg:left-[60px] xl:left-[110px] gap-y-6 '>
                    <div className='text-[22px]  font-extrabold text-[#78AAD5]'>
                        <p>About us</p>
                    </div>
                    <Link href={"/"}>
                        <div className='cursor-pointer text-[16px] font-normal text-[#0000009C]'>
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className='cursor-pointer text-[16px] font-normal text-[#0000009C]'>
                            <p>How we work</p>
                        </div>
                    </Link>
                    <Link href={"/"}>
                        <div className='cursor-pointer text-[16px] font-normal text-[#0000009C]'>
                            <p>Our team</p>
                        </div>
                    </Link>
                    <Link href={"/pricing"}>
                        <div className='cursor-pointer text-[16px] font-normal text-[#0000009C]'>
                            <p>Pricing</p>
                        </div>
                    </Link>
                    <Link href={"/pricing"}>
                        <div className='cursor-pointer text-[16px] font-normal text-[#0000009C]'>
                            <p>Legal</p>
                        </div>
                    </Link>

                </div>

                <div className='lg:mr-32 flex  flex-col gap-y-8 '>
                    <div className='text-[22px] font-extrabold text-[#78AAD5]'>
                        <p>Location</p>
                    </div>
                    <div className='cursor-pointer flex gap-x-2 text-[16px] font-normal text-[#0000009C]'>
                        <img src="/map.svg" alt="" />
                        <p>Street # 1212</p>
                    </div>
                    <div className='cursor-pointer flex gap-x-2 text-[16px] font-normal text-[#0000009C]'>
                        <img src="/map.svg" alt="" />
                        <p>Street # 1212</p>
                    </div>


                </div>

                <div className='flex flex-col  gap-y-8 '>
                    <div className='text-[22px] font-extrabold text-[#78AAD5]'>
                        <p>Contact us</p>
                    </div>
                    <div className='cursor-pointer flex gap-x-2 text-[16px] font-normal text-[#0000009C]'>
                        <p>abc@email.com</p>
                    </div>
                    <div className='cursor-pointer flex gap-x-2 text-[16px] font-normal text-[#0000009C]'>
                        <p>+123 456 789</p>
                    </div>


                </div>
            </div>


            <div className='mt-16 md:mt-20 text-[14px]  md:text-[20px] flex justify-center items-center text-center text-[#0000009C]'>
                <p> © 2023 Up Business by Zysoftec | All Rights Reserved </p>
            </div>

        </div>
    )
}
