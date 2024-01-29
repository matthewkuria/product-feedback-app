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
            <div className=" absolute top-0 left-0 bg-black  right-0 bottom-0  ">
                <div className="flex justify-center mt-10 w-[768px] mx-auto">
                <AddFeedBack />
                </div>
            </div>
        }
        </>
    )
}