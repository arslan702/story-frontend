'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closemenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <>
            <div className='z-[80] flex font-Poppins flex-col w-full'>
                <div className=' md:mx-[60px] pt-2 flex justify-between   '>
                    {/* logo */}
                    <Link href={"/"}>
                        <div>
                            <img src="loginlogo.svg" alt="" className='cursor-pointer' />
                        </div>
                    </Link>
                    {/* link */}
                    <div className='flex justify-center items-center gap-x-6 text-[16px]'>
                        <Link href={"/"}>
                            <div className='hidden md:inline cursor-pointer text-[#78AAD5]'>
                                <p>Create</p>
                            </div>
                        </Link>
                        <Link href={"/gallery"}>
                            <div className='hidden md:inline cursor-pointer text-[#424242]'>
                                <p>Gallery</p>
                            </div>
                        </Link>
                        <Link href={"/pricing"}>
                            <div className='hidden md:inline cursor-pointer text-[#424242]'>
                                <p>Pricing</p>
                            </div>
                        </Link>
                        {/* login btn */}
                        <Link href={"/login"}>
                            <div className='hidden md:flex ml-5 cursor-pointer rounded-full  justify-center items-center p-3 w-[135px] bg-[#78AAD5] text-white'>
                                <button>Login</button>
                            </div>
                        </Link>
                        {/* hamburger */}
                        <div onClick={toggleMenu} className='mr-6 md:hidden cursor-pointer gap-y-1   rounded-full flex flex-col justify-center items-center   text-white'>
                            <div className='h-1 w-4 font-bold bg-[#78AAD5]'></div>
                            <div className='h-1 w-4 font-bold bg-[#78AAD5]'></div>
                            <div className='h-1 w-4 font-bold bg-[#78AAD5]'></div>

                        </div>
                    </div>

                </div>


            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className='z-[100] flex bg-[#78AAD5]/20 backdrop-blur-lg pb-5 text-white gap-y-4 absolute md:hidden flex-col font-Poppins w-full'>
                    {/* Logo */}
                    <div className='flex justify-center items-center'>
                        <img src="loginlogo.svg" alt="" className='cursor-pointer' />
                    </div>

                    {/* Links */}
                    <div className='flex justify-center items-center flex-col gap-y-6 text-[16px]'>
                        <div onClick={closemenu} className='cursor-pointer absolute top-4 right-4'>
                            <p className='text-[#424242] text-[20px] font-extrabold'>X</p>
                        </div>
                        <Link href={"/"}>
                            <div className='cursor-pointer text-[#78AAD5]'>
                                <p>Create</p>
                            </div>
                        </Link>
                        <Link href={"/gallery"}>
                            <div className='cursor-pointer text-[#424242]'>
                                <p>Gallery</p>
                            </div>
                        </Link>
                        <Link href={"/pricing"}>
                            <div className='cursor-pointer text-[#424242]'>
                                <p>Pricing</p>
                            </div>
                        </Link>

                        {/* Login button */}
                        <Link href={"/login"}>
                            <div className='ml-5 cursor-pointer rounded-full flex justify-center items-center p-3 w-[135px] bg-[#78AAD5] text-white'>
                                <button>Login</button>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
