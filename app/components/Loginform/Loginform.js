import Link from 'next/link'
import React from 'react'

export default function Loginform() {
    return (
        <div className='flex flex-col font-Poppins'>
            <div className='flex justify-center items-center mt-[10px] md:mt-[100px]'>
                <p className='text-[#78AAD5] font-semibold text-[20px]'>Login</p>
            </div>
            {/* form */}
            <div className='flex flex-col  mt-5'>
                <div className='flex flex-col gap-y-2  mx-4 md:mx-[80px] xl:mx-[150px]'>
                    <p className='text-[18px] font-medium'>E-mail:</p>
                    <input type="text" name="" id=""
                        className='rounded-full border p-3'
                        placeholder='Enter your e-mail'
                    />

                </div>
                {/* 2 */}
                <div className='flex flex-col gap-y-2 mx-4 md:mx-[80px] xl:mx-[150px] mt-[40px]'>
                    <p className='text-[18px] font-medium'>Password:</p>
                    <input type="text" name="" id=""
                        className='rounded-full border p-3'
                        placeholder='Password'
                    />
                    <div className='flex justify-end'>
                        <p className='text-[#6DA3D1] cursor-pointer text-[16px] font-medium'>Forget Password?</p>
                    </div>

                </div>
                {/* buttons */}
                <div className='flex flex-col'>
                    <Link href={"/"}>
                        <div className='cursor-pointer flex justify-center text-white text-[16px] items-center mx-4 md:mx-[80px] xl:mx-[150px] mt-[40px] bg-[#78AAD5] rounded-full p-3'>
                            <button>Login</button>
                        </div>
                    </Link>
                    <div className='mt-[20px] flex justify-center text-black text-[16px] items-center mx-4 md:mx-[80px] xl:mx-[150px]   rounded-full p-3'>
                        <p>or</p>
                    </div>
                    <div className='cursor-pointer border border-[#B6B6B6] flex gap-x-4 justify-center text-[#676767] text-[16px] items-center mx-4 md:mx-[80px] xl:mx-[150px] mt-[10px]  rounded-full p-3'>
                        <img src="/googleicon.svg" alt="" />
                        <button>Continue with Google</button>
                    </div>
                    <div className='mt-[20px] flex text-center justify-center font-normal text-black text-[16px] items-center mx-4 md:mx-[80px] xl:mx-[150px]   rounded-full p-3'>
                        <p>Don&apos;t have an account? <span className='text-[#6DA3D1] cursor-pointer'>Create an account</span></p>
                    </div>
                </div>

            </div>

        </div>
    )
}
