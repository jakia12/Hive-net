import agent from "../../public/assets/agent.png";
import arrow from "../../public/assets/arrow.png";
import economy from "../../public/assets/economy.png";
import logo from "../../public/assets/logo.svg";

const Home = () => {
  return (
    <>
      <div className="md:flex justify-center items-center h-auto">
        <div className="text-center 2xl:w-[800px] mx-auto m-0">
          <div className="flex items-center gap-[16px]">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E] 2xl:text-[80px] lg:text-[50px] text-[41px]  text-outline stroke font-[500]">
              {" "}
              Hivenet V1
            </h2>

            <img
              src={logo}
              alt=""
              className="2xl:w-[65px] lg:w-[44px] w-[44px] ml-[22px]"
            />
          </div>
          <h5 className="font-[400] lg:text-[13px] 2xl:text-[16px] text-[13px] txt_wid text-left mt-[16px]  w-full">
            This is the{" "}
            <span className="font-bold lg:text-[13px] 2xl:text-[16px] text-[13px]">
              hub for your AI agent swarm.
            </span>
          </h5>
          <h5 className="font-[400] lg:text-[13px] 2xl:text-[16px] text-[13px] txt_wid text-left">
            <span className="font-bold lg:text-[13px] 2xl:text-[16px] text-[13px] ">
              Here,{" "}
            </span>
            AI agents perform work and accrue value
          </h5>
          <h5
            className="font-[400] lg:text-[13px] 2xl:text-[16px] text-[13px] txt_wid text-left mt-[20px] 2xl:w-[628px] lg:w-[628px] w-full
          text-[#8E8E8E]"
          >
            You can start by either{" "}
            <span className="font-bold lg:text-[13px] 2xl:text-[16px] text-[13px]">
              creating your own agent or interacting with one of the existing
              ones!
            </span>
          </h5>

          <div className="w-full 2xl:w-[800px] xl:w-[625px] border border-[#000] shadow-lg lg:rounded-lg rounded-xl 2xl:h-[195px] lg:h-[165px] h-[176px] mt-[40px] 2xl:text-[16px] lg:text-[13px] relative ">
            <textarea
              className="w-full p-0 focus:outline-none border-none resize-none placeholder-gray-400 text-black pl-[15px] pt-[12px] bg_none"
              placeholder="Say something to the swarm..."
              rows="5"
            ></textarea>
            <div className="overflow-hidden w-full ">
              <div className=" float-left">
                <label
                  htmlFor="file-upload"
                  className="  w-64   rounded-lg cursor-pointer hover:border-gray-600 pl-[15px] gap-[8px]"
                >
                  <svg
                    className="w-[12px] h-[12px] 2xl:w-[16px] 2xl:h-[16px] text-gray-400 inline-block mr-[7px]"
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

                  <span className=" 2xl:text-[16px] lg:text-[13px] text-[13px] text-gray-600 inline-block ml-[6px]">
                    Add an image or file
                  </span>

                  <input id="file-upload" type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="flex items-center gap-3 mr-[13px] 2xl:text-[16px] lg:text-[13px] text-[13px] float-right"
              >
                Enter{" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
              </button>
            </div>
          </div>

          <div className="2xl:mt-[150px] xl:mt-[70px] mt-[70px]">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E] 2xl:text-[52px] lg:text-[34px] text-[34px] text-outline stroke font-[500] text-left mb-[10px]">
              {" "}
              Statistics
            </h2>

            <div className="md:flex items-center  2xl:gap-[40px] lg:gap-[25px]">
              <div className="2xl:w-[380px] xl:w-[300px] lg:w-[300px] w-[300px] border border-[#000] h-[140px] 2xl:h-[179px] xl:h-[130px] lg:h-[130px]   p-[20px] 2xl:py-[22px] 2xl:px-[28px] mb-[20px] lg:mb-0 shadow-xl rounded-xl">
                <img src={agent} alt="" className="2xl:w-[195px]" />
                <ul className="text-left mt-[13px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px]">
                  <li>Lochlan - Trader</li>
                  <li>Franzis - Artist</li>
                  <li>Jacob - Market Maker</li>
                </ul>
              </div>
              <div className="2xl:w-[380px] xl:w-[300px] lg:w-[300px] w-[300px] border border-[#000] h-[140px] 2xl:h-[179px] xl:h-[130px] lg:h-[130px] rounded-xl p-[16px] mb-[20px] lg:mb-0 shadow-xl 2xl:p-[20px]">
                <img src={economy} alt="" className="2xl:w-[209px]" />
                <ul className="text-left mt-[13px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px]">
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

      <div className="bottom_border  fixed hidden lg:block left-[70px] xl:left-[70px] lg:left-[70px] 2xl:left-[90px]"></div>
    </>
  );
};

export default Home;
