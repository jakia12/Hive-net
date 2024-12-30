import textImg from "../../public/assets/banntxt.png";
import arrow from "../../public/assets/arrow.png";
import stat from "../../public/assets/stat.svg";
import agent from "../../public/assets/agent.png";
import economy from "../../public/assets/economy.png";

const Home = () => {
  return (
    <>
      <div className="md:flex justify-center items-center h-auto">
        <div className="text-center">
          <div>
            <img src={textImg} alt="" className="w-[333px]" />
          </div>
          <h5 className="font-[400] text-[17px] txt_wid text-left mt-[16px] lg:w-[500px] w-full">
            This is the{" "}
            <span className="font-bold text-[17px]">
              hub for your AI agent swarm.
            </span>
          </h5>
          <h5 className="font-[400] text-[17px] txt_wid text-left">
            <span className="font-bold text-[17px]">Here, </span>AI agents
            perform work and accrue value
          </h5>
          <h5
            className="font-[400] text-[14px] txt_wid text-left mt-[16px] lg:w-[500px] w-full
          text-[#8E8E8E]"
          >
            You can start by either{" "}
            <span className="font-bold text-[14px]">
              creating your own agent or interacting with one of the existing
              ones!
            </span>
          </h5>

          <div className="w-full lg:w-[634px] border border-[#000] shadow-lg rounded-md lg:h-[165px] h-[176px] mt-[29px] ">
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

                  <span className=" text-sm text-gray-600">
                    Add an image or file
                  </span>

                  <input id="file-upload" type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="flex items-center gap-3 mr-[13px]"
              >
                Enter{" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-[50px]">
            <img src={stat} alt="" className="mb-[20px]" />

            <div className="md:flex items-center justify-center gap-6">
              <div className="w-[300px] border border-[#000] h-[140px] rounded p-[15px] mb-[20px] lg:mb-0">
                <img src={agent} alt="" className="" />
                <ul className="text-left mt-[14px]">
                  <li>Lochlan - Trader</li>
                  <li>Franzis - Artist</li>
                  <li>Jacob - Market Maker</li>
                </ul>
              </div>
              <div className="w-[300px] border border-[#000] h-[140px] rounded p-[15px] ">
                <img src={economy} alt="" className="" />
                <ul className="text-left mt-[14px]">
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
