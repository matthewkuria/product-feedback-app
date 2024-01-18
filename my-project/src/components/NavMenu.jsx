import React from "react";
export default function NavMenu(){
    return(
        <div className="MainDiv hidden md:flex  justify-between lg:flex-col">
            <div className="rounded-lg bg-white text-[#4661E6] font-bold w-1/2 h-full p-5">
                <button className="text-white py-1 px-3 bg-[#4661E6] rounded-lg">All</button>
                <button className="m-3 py-1 px-3 bg-[#F2F4FF]">UI</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF]">UX</button>
                <button className="my-3 py-1 px-3 bg-[#F2F4FF]">Enhancement</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF]">Bug</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF]">Feature</button>
            </div>
            <div className="bg-white rounded-lg mx-2 md:mt-5">
                <p className="font-bold text-[#3A4374]">Roadmap <span className="font-normal text-[#4661E6] mx-8"><a href="" className="hover:underline">View</a></span></p>
                <div className="flex items-center p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                </svg>
                <p className="mx-3">Planned <span className="mx-9 font-bold text-[#647196]">0</span></p>
                </div>
                <div className="flex items-center p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                </svg>
                <p className="mx-3">In-Progress <span className="mx-9 font-bold text-[#647196]">0</span></p>
                </div>
                <div className="flex items-center p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                </svg>
                <p className="mx-3">Live <span className="mx-9 font-bold text-[#647196]">0</span></p>
                </div>

            </div>

        </div> 
    )
}