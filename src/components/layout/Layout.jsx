// components/Layout.jsx

import { Outlet } from "react-router-dom";
import flogo from "../../../public/assets/flLogo.png";
import gear from "../../../public/assets/gear.png";
import logo from "../../../public/assets/logo.svg";

const Layout = () => {
  return (
    <div className="flex  ">
      {/* <div className="xl:w-[6%] lg:w-[5%] w-[5%] border-r border-black h-[130vh] relative"> */}
      <div className="xl:w-[70px] lg:w-[70px] 2xl:w-[90px]   text-white border-r border-black lg:flex flex-col items-center fixed h-full hidden ">
        <img src={logo} className="topLogo 2xl:w-[65px] lg:w-[40px]" alt="" />

        <img src={gear} className="gearIcon" alt="" />
        <img
          src={flogo}
          className="bottomLogo 2xl:w-[54px] lg:w-[40px]"
          alt=""
        />
      </div>
      <div className="flex-1 overflow-y-auto relative md:h-auto 2xl:pt-[180px] lg:pt-[80px] 2xl:pb-[180px] lg:pb-[120px] pb-[90px] flex items-center justify-center 2xl:ml-[90px] xl:ml-[70px] lg:ml-[70px] ml-0 px-4 sm:px-6">
        <div className="wrapper">
          <div className="w-full  text-white border-b border-[#000] flex items-center  h-full lg:hidden justify-between mb-[70px]">
            <img src={logo} className="" alt="" />

            <div className="flex items-center  justify-center gap-[10px] p-[20px]">
              {" "}
              <img src={gear} className="" alt="" />
              <img src={flogo} className="" alt="" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
