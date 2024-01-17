import React from "react";
import AddButton from "./AddFeedBackBtn";
export default function Suggestions(){
    return(
        <div className="SUG flex justify-between p-5 md:rounded-lg md:mt-10 bg-white">
            <div className="">
                <p>Sort by : <span>Most Upvotes</span></p>
            </div>
            <div className="">
                <AddButton />
            </div>
        </div>
    )
}