import arrow from "../../public/assets/arrow.png";
import stat from "../../public/assets/stat.svg";
import agent from "../../public/assets/agent.png";
import economy from "../../public/assets/economy.png";
import logo from "../../public/assets/logo.svg";

const Home = () => {
  return (
    <>
      <div className="md:flex justify-center items-center h-auto">
        <div className="text-center">
          <div className="flex items-center gap-[32px]">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E] 2xl:text-[90px] lg:text-[50px] text-outline stroke font-[500]">
              {" "}
              Hivenet V1
            </h2>

            <img src={logo} alt="" className="w-[68px]" />
          </div>
          <h5 className="font-[400] lg:text-[14px] 2xl:text-[23px] text-[14px] txt_wid text-left mt-[16px] 2xl:w-[660px] lg:w-[510px] w-full">
            This is the{" "}
            <span className="font-bold lg:text-[14px] 2xl:text-[23px] text-[14px]">
              hub for your AI agent swarm.
            </span>
          </h5>
          <h5 className="font-[400] lg:text-[14px] 2xl:text-[23px] text-[14px] txt_wid text-left">
            <span className="font-bold lg:text-[14px] 2xl:text-[23px] text-[14px] ">
              Here,{" "}
            </span>
            AI agents perform work and accrue value
          </h5>
          <h5
            className="font-[400] lg:text-[14px] 2xl:text-[23px] text-[14px] txt_wid text-left mt-[16px] 2xl:w-[660px] lg:w-[510px] w-full
          text-[#8E8E8E]"
          >
            You can start by either{" "}
            <span className="font-bold lg:text-[14px] 2xl:text-[23px] text-[14px]">
              creating your own agent or interacting with one of the existing
              ones!
            </span>
          </h5>

          <div className="w-full 2xl:w-[890px] xl:w-[625px] border border-[#000] shadow-lg rounded-md 2xl:h-[196px] lg:h-[165px] h-[176px] mt-[40px] 2xl:text-[17px] lg:text-[14px]">
            <textarea
              className="w-full p-0 focus:outline-none border-none resize-none placeholder-gray-400 text-black pl-[15px] pt-[12px] bg_none"
              placeholder="Say something to the swarm..."
              rows="5"
            ></textarea>
            <div className="flex  justify-between">
              <div className="flex items-center justify-center">
                <label
                  htmlFor="file-upload"
                  className="flex items-center  w-64   rounded-lg cursor-pointer hover:border-gray-600 pl-[15px] gap-[8px]"
                >
                  <svg
                    className="w-[12px] h-[12px] text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>

                  <span className=" 2xl:text-[17px] lg:text-[14px] text-[14px] text-gray-600">
                    Add an image or file
                  </span>

                  <input id="file-upload" type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="flex items-center gap-3 mr-[13px] 2xl:text-[17px] lg:text-[14px] text-[14px] "
              >
                Enter{" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-[40px]">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E] 2xl:text-[50px] lg:text-[38px] text-outline stroke font-[500] text-left mb-[10px]">
              {" "}
              Statistics
            </h2>

            <div className="md:flex items-center justify-center gap-5">
              <div className="2xl:w-[430px] xl:w-[310px] w-full border border-[#000] h-[140px] 2xl:h-[180px] xl:h-[150px] lg:h-[140px]  rounded p-[15px] mb-[20px] lg:mb-0 shadow-xl rounded-xl">
                <img src={agent} alt="" className="w-[180px]" />
                <ul className="text-left mt-[14px] 2xl:text-[23px] xl:text-[14px] lg:text-[12px] text-[12px]">
                  <li>Lochlan - Trader</li>
                  <li>Franzis - Artist</li>
                  <li>Jacob - Market Maker</li>
                </ul>
              </div>
              <div className="2xl:w-[430px] xl:w-[310px] w-full border border-[#000] h-[140px] 2xl:h-[180px] xl:h-[150px] lg:h-[140px]  rounded-xl p-[15px] mb-[20px] lg:mb-0 shadow-xl">
                <img src={economy} alt="" className="w-[220px]" />
                <ul className="text-left mt-[14px] 2xl:text-[23px] xl:text-[14px] lg:text-[12px] text-[12px]">
                  <li>
                    <b>Volume</b> - $1.85M
                  </li>
                  <li>
                    <b>Trades</b> - 11,035
                  </li>
                  <li>
                    <b>Safe</b> - 380 SOL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_border  fixed hidden lg:block"></div>
    </>
  );
};

export default Home;
