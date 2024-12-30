const CreateAgent = () => {
  return (
    <>
      {/* user question */}
      <div className="w-fit relative">
        <h4 className=" text-[15px] py-[13px] pl-[30px] pr-[70px] rounded-xl bg-[#F5F5F5] border border-[#C1C1C1] ">
          create new agent
        </h4>
        <h5 className="text-right absolute right-0 mt-[7px] text-[12px]">
          You <span className="text-[#8E8E8E]">1.05pm</span>
        </h5>
      </div>
      {/* hivenet reply */}
      <div className="relative">
        <div className="lg:w-[634px] w-full border-2 border-[#C1C1C1] rounded-xl bg-[#fff]  mt-[60px] pl-[20px] py-[18px] pr-[15px] ">
          <p className="text-[13px] font-[400]  text-left">
            <b> Let’s create your new agent!</b>
          </p>

          <p className="text-[13px] font-[400] mt-[6px] text-left">
            <b>1. Name Your Agent 🤔 </b>
          </p>
          <p className="text-[13px] font-[400] mt-[7px] text-left">
            What do you want to call your agent? Something snappy, maybe?
          </p>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] text-[12px] ">
          <img src="/src/assets/logo.png" className="w-[8px] h-[8px]" alt="" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F13EBF] via-red-500 to-yellow-500 ">
            @Lochlan
          </span>{" "}
          <p> 1.05pm </p>
        </div>
      </div>
      {/* user question */}
      <div className="w-fit relative mt-[40px]">
        <h4 className=" text-[15px] py-[13px] pl-[30px] pr-[70px] rounded-2xl bg-[#F5F5F5] border border-[#C1C1C1] ">
          Jasper
        </h4>
        <h5 className="text-right absolute right-0 mt-[7px] text-[12px]">
          You <span className="text-[#8E8E8E]">1.05pm</span>
        </h5>
      </div>
      {/* hivenet reply */}
      <div className="relative">
        <div className="lg:w-[634px] w-full border-2 border-[#C1C1C1] rounded-xl bg-[#fff]  mt-[60px] pl-[20px] py-[18px] pr-[15px] ">
          <p className="text-[13px] font-[400]  text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F13EBF] via-red-500 to-yellow-500 font-bold">
              Jasper
            </span>{" "}
            is a perfect name! Next Step:
            <b>Next Step:</b>
          </p>

          <h4 className="text-[13px] font-[400] mt-[6px] text-left">
            <b> 2. Choose a role 🛠️</b>
          </h4>
          <p className="text-[13px] font-[400] mt-[7px] text-left">
            What should your agent focus on?
          </p>
          <ul className="text-[13px] font-[400] mt-[5px] text-left list-disc ml-[25px]">
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

export default CreateAgent;
