import {React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import AddFeedBack from "./AddFeedBack";
export default function AddButton(){
    const [isActive , setActive] = useState(false)
    function handleClick(){
        setActive(!isActive)
    }
    const navigate = useNavigate();
    return(
        <>
        <button onClick={handleClick} className="BTN w-36 h-10 text-white hover:bg-[#C75AF6]">
                + Add Feedback
        </button>
        {
            isActive &&
            <div className=" absolute top-0 left-0 bg-[#F7F8FD]  right-0 bottom-0  ">                
                <div className="relative  bg-[#F7F8FD]">
                    <div className="">                    
                        <button onClick={() =>navigate(-1)} className="text-[#647196] flex items-center justify-center mt-5 mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                            <path d="M4.33447 9L0.334473 5L4.33447 1" stroke="#4661E6" stroke-width="2"/>
                            </svg>
                            <p>Go Back</p>
                        </button>
                    </div>
                    <div className="flex justify-center mt-10 md:w-[768px] mx-auto">
                        <AddFeedBack />
                    </div>
                </div>
            </div>
        }
        </>
    )
}
