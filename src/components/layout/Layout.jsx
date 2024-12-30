// components/Layout.jsx

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex ">
      {/* <div className="xl:w-[6%] lg:w-[5%] w-[5%] border-r border-black h-[130vh] relative"> */}
      <div className="w-[70px]  text-white border-r border-black lg:flex flex-col items-center fixed h-full hidden ">
        <img src="/src/assets/logo.png" className="topLogo" alt="" />

        <img src="/src/assets/gear.png" className="gearIcon" alt="" />
        <img src="/src/assets/flLogo.png" className="bottomLogo" alt="" />
      </div>
      <div className="flex-1 overflow-y-auto relative md:h-auto lg:py-[110px] pb-[80px] flex items-center justify-center md:ml-[70px] ml-0 px-4 sm:px-6">
        <div className="w-full lg:w-[634px]">
          <div className="w-full  text-white border-b border-[#000] flex items-center  h-full lg:hidden justify-between mb-[70px]">
            <img src="/src/assets/logo.png" className="" alt="" />

            <div className="flex items-center  justify-center gap-[10px] p-[20px]">
              {" "}
              <img src="/src/assets/gear.png" className="" alt="" />
              <img src="/src/assets/flLogo.png" className="" alt="" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
