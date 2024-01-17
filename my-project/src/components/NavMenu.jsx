import React from "react";
export default function NavMenu(){
    return(
        <div className="MainDiv hidden md:block  justify-evenly">
            <div className="rounded-lg bg-white text-[#4661E6] font-bold w-1/2 h-full">
                <button className="text-white py-1 px-3 bg-[#4661E6] rounded-lg">All</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF]">UI</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF]">UX</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF]">Enhancement</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF]">Bug</button>
                <button className="mx-3 py-1 px-3 bg-[#F2F4FF]">Feature</button>
            </div>
            <div className="">
                <p className="font-bold text-[#3A4374]">Roadmap <span className="font-normal text-[#4661E6]"><a href="">View</a></span></p>

            </div>

        </div> 
    )
}