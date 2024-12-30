const NewUser = () => {
  return (
    <>
      {/* user question */}
      <div className="w-fit relative">
        <h4 className=" text-[15px] py-[15px] pl-[30px] pr-[70px] rounded-2xl bg-[#F5F5F5] border border-[#C1C1C1] ">
          Hello, what is this?
        </h4>
        <h5 className="text-right absolute right-0 mt-[7px] text-[12px]">
          You <span className="text-[#8E8E8E]">1.05pm</span>
        </h5>
      </div>
      {/* lolchan reply */}
      <div className="relative">
        <div className="lg:w-[634px] w-full border-2 border-[#C1C1C1] rounded-xl bg-[#fff]  mt-[60px] pl-[20px] py-[15px] pr-[15px] ">
          <p className="text-[13px] font-[400]  text-left">
            <b> Greetings</b>, it looks like you’re new here
          </p>

          <p className="text-[13px] font-[400] mt-[7px] text-left">
            <b>
              {" "}
              I’m the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F13EBF] via-red-500 to-yellow-500">
                Hivenet agent.
              </span>
            </b>{" "}
            I’ll help you on your journey to <b>creating value for the hive</b>.
          </p>
          <p className="text-[13px] font-[400] mt-[7px] text-left">
            Hivenet is your hub for an autonomous swarm of AI agents working
            together to create and accrue value within the Solana ecosystem.
            Each agent has a set of skills, and plays a specific role. They can
            be traders, creators, market makers, defi participants and more.{" "}
          </p>
          <p className="text-[13px] font-[400] mt-[7px] text-left">
            Our agents work together to grow the hive and strengthen the $HIVE
            token!
          </p>

          <h4 className="text-[13px] font-bold mt-[20px] text-left">
            To get started:
          </h4>
          <p className="text-[13px] font-[400] mt-[6px] text-left">
            <b>1. Talk to the swarm:</b> Ask questions or give tasks to your own
            autonomous agents.
          </p>
          <p className="text-[13px] font-[400] mt-[6px] text-left">
            <b>2. Create your own agent:</b> Say{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F13EBF] via-red-500 to-yellow-500">
              “create new agent”{" "}
            </span>
            and I'll walk you through making one!
          </p>
          <p className="text-[13px] font-[400] mt-[6px] text-left">
            <b>3. Monitor progress:</b> Check stats to see how your cluster of
            the hive is thriving.
          </p>
          <p className="text-[13px] font-bold mt-[6px] text-left">
            {" "}
            You’re now part of the hive. Let’s build together! 🐝✨
          </p>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] text-[12px]">
          <img src="/src/assets/logo.png" className="w-[8px] h-[8px]" alt="" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F13EBF] via-red-500 to-yellow-500 ">
            @Lochlan
          </span>{" "}
          <p> 1.05pm </p>
        </div>
      </div>

      {/* messege box */}

      <div className="border-2 border-[#000] shadow-xl rounded-xl lg:w-[634px] w-full p-[15px] mt-[200px] relative">
        <input
          type="text"
          className="w-full outline-none border-none focus:ring-0"
          placeholder="Type Messege..."
        />
        <button type="submit" className="absolute right-4">
          <img src="/src/assets/msg.png" alt="" />
        </button>
      </div>
      <div className="bottom_border  fixed"></div>
    </>
  );
};

export default NewUser;
