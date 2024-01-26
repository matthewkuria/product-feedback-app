import React from "react";
import { Link } from "react-router-dom";
export default function NavMenu(){
    return(
        <div className="MainDiv hidden md:flex  justify-between lg:flex-col">
            <div className="rounded-lg bg-white text-[#4661E6] font-bold w-1/2 h-full p-5">
                <button className="text-white py-1 px-3 bg-[#4661E6] rounded-lg hover:bg-[#CFD7FF]">All</button>
                <button className="m-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">UI</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">UX</button>
                <button className="my-3  py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">Enhancement</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">Bug</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">Feature</button>
            </div>
            <div className="bg-white rounded-lg mx-2 lg:mx-0 md:mt-5 p-5">
                <p className="font-bold text-left text-[#3A4374]">Roadmap <span className="font-normal text-[#4661E6] ml-16"><a href="" className="hover:underline">View</a></span></p>
                <div className="flex items-center  pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                </svg>
                <p className="ml-4">Planned <span className="ml-16 font-bold text-[#647196]">2</span></p>
                </div>
                <div className="flex items-center py-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                </svg>
                <p className="ml-4">In-Progress <span className="ml-11 font-bold text-[#647196]">3</span></p>
                </div>
                <div className="flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                </svg>
                <p className="ml-4">Live <span className="ml-24 font-bold text-[#647196]">1</span></p>
                </div>

            </div>

        </div> 
    )
}