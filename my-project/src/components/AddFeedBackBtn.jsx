import {React, useState} from "react";
import AddFeedBack from "./AddFeedBack";
export default function AddButton(){
    const [isActive , setActive] = useState(false)
    function handleClick(){
        setActive(!isActive)

    }
    return(
        <>
        <button onClick={handleClick} className="BTN w-36 h-10 text-white hover:bg-[#C75AF6]">
                + Add Feedback
        </button>
        {
            isActive &&
            <div className=" absolute top-0 left-0 bg-[#F7F8FD]  right-0 bottom-0  ">
                <div className="flex justify-center items-center">                    
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                        <path d="M4.33447 9L0.334473 5L4.33447 1" stroke="#4661E6" stroke-width="3"/>
                        </svg>
                        Go Back
                    </a>
                </div>
                <div className="flex justify-center mt-10 md:w-[768px] mx-auto">
                    <AddFeedBack />
                </div>
            </div>
        }
        </>
    )
}