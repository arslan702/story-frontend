// 'use client'
import React from "react";
import Loginform from "../components/Loginform/Loginform";

export default function page() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-x-3 min-h-[100vh] md:p-4">
        {/* left */}
        <div className="md:w-[50%]  flex flex-col rounded-lg bg-[#E0ECF6]">
          <div className="flex flex-col p-3 text-black pb-11 pl-7 gap-y-2 ">
            <p className="font-Fredoka font-medium text-[18px] lg:text-[37px]">
              Your Personalized{" "}
              <span className="text-[#78AAD5]">Storybook</span>{" "}
            </p>
            <p className="font-Poppins font-semibold text-[14px] text-center md:text-start lg:text-[20px]">
              Create a Book That Will Spark Your Child&apos;s Imagination{" "}
            </p>
          </div>
          <div>
            <img src="/loginback.svg" alt="" />
          </div>
        </div>

        {/* right  */}
        <div className="md:relative md:w-[50%] ">
          <div className="flex items-center justify-center md:absolute md:right-2 md:top-2 animate-pulse">
            <img src="/loginlogo.svg" alt="" className="" />
          </div>
          <Loginform />
        </div>
      </div>
    </>
  );
}
