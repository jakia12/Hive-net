// components/Layout.jsx

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-c">
      {/* <div className="xl:w-[6%] lg:w-[5%] w-[5%] border-r border-black h-[130vh] relative"> */}
      <div className="w-[70px]  text-white border-r border-black flex flex-col items-center fixed h-full">
        <img src="/src/assets/logo.png" className="topLogo" alt="" />

        <img src="/src/assets/gear.png" className="gearIcon" alt="" />
        <img src="/src/assets/flLogo.png" className="bottomLogo" alt="" />
      </div>
      <div className=" flex-1 overflow-y-auto relative md:h-auto py-[110px] flex items-center justify-center ml-[70px]">
        <div className=" ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
