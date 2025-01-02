import arrow from "../../public/assets/arrow.png";
import logo from "../../public/assets/logo.png";

const CreateAgent = () => {
  return (
    <div className="pb-[120px]">
      {/* user question */}
      <div className="w-fit relative">
        <h4 className=" text-[13px] xl:text-[13px] 2xl:text-[17px] py-[13px] pl-[18px] 2xl:pr-[46px] xl:pr-[46px] lg:pr-[46px] pr-[30px] text-left rounded-lg bg-[#F5F5F5] border border-[#C1C1C1] ">
          create new agent
        </h4>
        <h5 className="text-right absolute right-0 mt-[7px] 2xl:text-[16px] text-[12px] xl:text-[12px] lg:text-[12px]">
          You <span className="text-[#8E8E8E]">1.05pm</span>
        </h5>
      </div>
      {/* hivenet reply */}
      <div className="relative">
        <div className="xl:w-[625px] 2xl:w-[800px] w-full border-2 border-[#C1C1C1] rounded-xl bg-[#fff]  mt-[60px] pl-[20px] py-[18px] pr-[15px] ">
          <p className="text-[13px] xl:text-[13px] 2xl:text-[17px] font-[400]  text-left">
            <b> Let’s create your new agent!</b>
          </p>

          <p className="text-[13px] xl:text-[13px] 2xl:text-[17px] font-[400] mt-[6px] text-left">
            <b>1. Name Your Agent 🤔 </b>
          </p>
          <p className="text-[13px] xl:text-[13px] 2xl:text-[17px] font-[400] mt-[7px] text-left">
            What do you want to call your agent? Something snappy, maybe?
          </p>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] 2xl:text-[16px] text-[12px] xl:text-[12px] lg:text-[12px]">
          <img src={logo} className="w-[8px] h-[8px]" alt="" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E]">
            @Lochlan
          </span>{" "}
          <p> 1.05pm </p>
        </div>
      </div>
      {/* user question */}
      <div className="w-fit relative mt-[40px]">
        <h4 className=" text-[13px] xl:text-[13px] 2xl:text-[17px] py-[13px] pl-[18px] 2xl:pr-[46px] xl:pr-[46px] lg:pr-[46px] pr-[30px] text-left rounded-lg bg-[#F5F5F5] border border-[#C1C1C1] ">
          Jasper
        </h4>
        <h5 className="text-right absolute right-0 mt-[7px] 2xl:text-[16px] text-[12px] xl:text-[12px] lg:text-[12px]">
          You <span className="text-[#8E8E8E]">1.05pm</span>
        </h5>
      </div>
      {/* hivenet reply */}
      <div className="relative">
        <div className="xl:w-[625px] 2xl:w-[800px] w-full border-2 border-[#C1C1C1] rounded-xl bg-[#fff]  mt-[60px] pl-[20px] py-[18px] pr-[15px] ">
          <p className="text-[13px] xl:text-[13px] 2xl:text-[17px] font-[400]  text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E]">
              Jasper
            </span>{" "}
            is a perfect name! Next Step:
            <b>Next Step:</b>
          </p>

          <h4 className="text-[13px] xl:text-[13px] 2xl:text-[17px] font-[400] mt-[6px] text-left">
            <b> 2. Choose a role 🛠️</b>
          </h4>
          <p className="text-[13px] xl:text-[13px] 2xl:text-[17px] font-[400] mt-[7px] text-left">
            What should your agent focus on?
          </p>
          <ul className="text-[13px] xl:text-[13px] 2xl:text-[17px] font-[400] mt-[5px] text-left list-disc ml-[25px]">
            <li>
              <b>Trader:</b> Buys, sells, and flips assets for profit
            </li>
            <li>
              <b> Creator:</b> Launches new tokens, creates assets, or memetics.
            </li>
            <li>
              <b>Market Maker:</b> Provides liquidity and stabilizes markets.
            </li>
          </ul>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] 2xl:text-[16px] text-[12px] xl:text-[12px] lg:text-[12px]">
          <img src={logo} className="w-[8px] h-[8px]" alt="" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E] ">
            @Lochlan
          </span>{" "}
          <p> 1.05pm </p>
        </div>
      </div>

      {/* messege box */}

      {/* chatbox */}
      <div className="w-[100%] xl:w-[625px] 2xl:w-[800px]  border border-[#000] shadow-lg rounded-lg h-[120px] 2xl:h-[137px] mt-[70px] fixed 2xl:bottom-[3rem] z-[9999999] xl:bottom-[3rem] lg:bottom-[3rem] bottom-[20px] sticki bg-[#fff] ">
        <textarea
          className="w-full p-0 focus:outline-none border-none resize-none placeholder-gray-400 text-black pl-[15px] pt-[12px] bg_none xl:text-[12px] 2xl:text-[17px] text-[12px]"
          placeholder="Talk to the swarm..."
          rows="3"
        ></textarea>
        <div className="flex  justify-between">
          <div className="flex items-center justify-center">
            <label
              htmlFor="file-upload"
              className="flex items-center  w-64   rounded-lg cursor-pointer hover:border-gray-600 pl-[15px] gap-[8px]"
            >
              <svg
                className="w-[12px] h-[12px] 2xl:w-[22px] 2xl:h-[22px] text-gray-400"
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

              <span className=" xl:text-[12px] 2xl:text-[17px] text-[12px]  text-gray-600">
                Add an image or file
              </span>

              <input id="file-upload" type="file" className="hidden" />
            </label>
          </div>

          <button
            type="submit"
            className="flex items-center gap-3 mr-[13px] xl:text-[13px] 2xl:text-[17px] text-[14px] "
          >
            Enter{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
      </div>
      <div className="bottom_border  fixed"></div>
    </div>
  );
};

export default CreateAgent;
