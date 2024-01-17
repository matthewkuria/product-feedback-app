import React from "react";
export default function NavBar(){
    return(
        <nav className="NAV  p-5 h-24 md:h-44 md:w-64 flex items-center justify-between md:rounded-xl ">
            <div className="">            
                <h1 className="font-bold">Frontend Mentor</h1>
                <p>Feedback Board</p>
            </div>
            <div className="md:hidden">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                    <rect width="20" height="3" fill="white"/>
                    <rect y="7" width="20" height="3" fill="white"/>
                    <rect y="14" width="20" height="3" fill="white"/>
                    </svg>                   
                </button>
            </div>
        </nav>
    )
}