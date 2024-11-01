import { Outlet } from "react-router-dom"
import Timeline from "../timeline/Timeline"
import Header from "./Header"
import Hamburger from "./Hamburger";

function Layout() {
    return (
        <div className="mainContainer">
            
            <Timeline />
            <Hamburger />
            
            <Outlet />
            
        </div>
    )
}

export default Layout;
