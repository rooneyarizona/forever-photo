import { Outlet } from "react-router-dom";
import Timeline from "../timeline/Timeline";

function Layout() {
  return (
    <div className="mainContainer">
      <Timeline />

      <Outlet />
    </div>
  );
}

export default Layout;
