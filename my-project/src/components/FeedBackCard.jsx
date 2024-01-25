import React from "react";
const Card = (props) =>{
    return(
        <div className="bg-white w-full flex items-center justify-between p-10 lg:w-11/12 mt-4 rounded-lg">
            <div className="">
                <button className="bg-[#F2F4FF] hover:bg-[#CFD7FF] py-2 px-1 rounded-md flex items-center text-[#3A4374] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                    <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" stroke-width="3"/>
                    </svg>
                   <h5 className="mx-2 font-bold">{props.upvotes}</h5>
                </button>
            </div>
            <div className="text-left">
                <h3 className="text-[#3A4374] text-xl font-bold">{props.title}</h3>
                <p className="text-[#647196] text-xl">{props.desc}</p>
                <button className="bg-[#F2F4FF] hover:bg-[#CFD7FF] text-[#4661E6]  font-bold py-1 px-3 rounded-md ">
                {props.category}
                </button>
            </div>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                </svg>
                <h5 className="text-[#3A4374] font-bold mx-2">{2}</h5>
            </div>

        </div>
    )
}
export default Card