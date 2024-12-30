import arrow from "../../public/assets/arrow.png";
import logo from "../../public/assets/logo.png";
const NewUser = () => {
  return (
    <>
      {/* user question */}
      <div className="w-fit relative">
        <h4 className=" text-[13px] xl:text-[13px] 2xl:text-[28px]  py-[11px] pl-[20px] pr-[70px] rounded-lg bg-[#F5F5F5] border border-[#C1C1C1] ">
          Hello, what is this?
        </h4>
        <h5 className="text-right absolute right-0 mt-[7px] text-[12px] xl:text-[12px] 2xl:text-[20px]">
          You <span className="text-[#8E8E8E]">1.05pm</span>
        </h5>
      </div>
      {/* lolchan reply */}
      <div className="relative">
        <div className="xl:w-[625px] 2xl:w-[1300px]  w-full border-2 border-[#C1C1C1] rounded-xl bg-[#fff]  mt-[60px] pl-[20px] py-[15px] pr-[15px] ">
          <p className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-[400]  text-left">
            <b> Greetings</b>, it looks like you’re new here
          </p>

          <p className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-[400] mt-[7px] text-left">
            <b>
              {" "}
              I’m the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E]">
                Hivenet agent.
              </span>
            </b>{" "}
            I’ll help you on your journey to <b>creating value for the hive</b>.
          </p>
          <p className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-[400] mt-[7px] text-left">
            Hivenet is your hub for an autonomous swarm of AI agents working
            together to create and accrue value within the Solana ecosystem.
            Each agent has a set of skills, and plays a specific role. They can
            be traders, creators, market makers, defi participants and more.{" "}
          </p>
          <p className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-[400] mt-[7px] text-left">
            Our agents work together to grow the hive and strengthen the $HIVE
            token!
          </p>

          <h4 className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-bold mt-[20px] text-left">
            To get started:
          </h4>
          <p className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-[400] mt-[6px] text-left">
            <b>1. Talk to the swarm:</b> Ask questions or give tasks to your own
            autonomous agents.
          </p>
          <p className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-[400] mt-[6px] text-left">
            <b>2. Create your own agent:</b> Say{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E]">
              “create new agent”{" "}
            </span>
            and I'll walk you through making one!
          </p>
          <p className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-[400] mt-[6px] text-left">
            <b>3. Monitor progress:</b> Check stats to see how your cluster of
            the hive is thriving.
          </p>
          <p className="text-[13px] xl:text-[13px] 2xl:text-[28px] font-bold mt-[6px] text-left">
            {" "}
            You’re now part of the hive. Let’s build together! 🐝✨
          </p>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] text-[12px]">
          <img src={logo} className="w-[8px] h-[8px]" alt="" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF76D9]  to-[#FDD33E]">
            @Lochlan
          </span>{" "}
          <p> 1.05pm </p>
        </div>
      </div>

      {/* messege box */}

      {/* <div className="border-2 border-[#000] shadow-xl rounded-xl lg:w-[625px] w-full p-[15px] mt-[200px] relative">
        <input
          type="text"
          className="w-full outline-none border-none focus:ring-0"
          placeholder="Type Messege..."
        />
        <button type="submit" className="absolute right-4">
          <img src={msg} alt="" />
        </button>
      </div> */}
      {/* chatbox */}
      <div className="w-full xl:w-[625px] 2xl:w-[1300px]  border border-[#000] shadow-lg rounded-md h-[120px] 2xl:h-[142px] mt-[70px] fixed bottom-[3rem] z-[9999999] bg-[#fff] ">
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

              <span className=" xl:text-[12px] 2xl:text-[17px] text-[12px]  text-gray-600">
                Add an image or file
              </span>

              <input id="file-upload" type="file" className="hidden" />
            </label>
          </div>

          <button
            type="submit"
            className="flex items-center gap-3 mr-[13px] xl:text-[15px] 2xl:text-[28px] text-[14px] "
          >
            Enter{" "}
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </div>
      </div>
      <div className="bottom_border  fixed"></div>
    </>
  );
};

export default NewUser;
