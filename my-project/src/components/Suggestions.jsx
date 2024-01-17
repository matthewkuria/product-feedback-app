import React from "react";
import AddButton from "./AddFeedBackBtn";
export default function Suggestions(){
    return(
        <div className="SUG flex justify-between p-5">
            <div className="">
                <p>Sort by : <span>Most Upvotes</span></p>
            </div>
            <div className="">
                <AddButton />
            </div>
        </div>
    )
}