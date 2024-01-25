import React from "react";
import NavBar from "./NavBar"
import NavMenu from './NavMenu'
import Suggestions from './Suggestions'
import Feedbacks from './FeedBacks'
const Layout = () => {
    return(
        <><div className="nav-bar md:flex lg:flex-col">
            <div className="lg:flex">
                <div className="md:flex lg:flex-col">
                    <NavBar />
                    <div className="md:flex lg:flex">
                        <NavMenu />
                    </div>
                </div>
                <div className="">
                    <Suggestions />
                    <Feedbacks />
                </div>
            </div>
            <div className="md:hidden lg:hidden">
                <NavMenu />
            </div>
        </div><div className=" hidden md:hidden">
                <Suggestions />
            </div><div className=" hidden md:hidden">
                <Feedbacks />
            </div>
            </>
    )
}
export default Layout