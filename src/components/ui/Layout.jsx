import { Outlet } from "react-router-dom"
import Timeline from "../timeline/Timeline"
import Header from "../Header"

function Layout() {
    return (
        <div className="mainContainer">
            
            <Timeline />
            
            <Outlet />
            
        </div>
    )
}

export default Layout;
