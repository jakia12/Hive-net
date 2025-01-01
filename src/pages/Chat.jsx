import arrow from "../../public/assets/arrow.png";
import logo from "../../public/assets/logo.png";
const Chat = () => {
  return (
    <div className="pb-[120px]">
      {/* user question */}
      <div className="w-fit relative">
        <h4 className=" text-[13px] xl:text-[13px] 2xl:text-[17px] py-[15px] pl-[18px] 2xl:pr-[30px] xl:pr-[30px] lg:pr-[30px] pr-[18px] text-left rounded-xl bg-[#F5F5F5] border border-[#C1C1C1] ">
          Hey <span className="text-[#9C1EFF]">@Lochlan</span>, whats your PnL
          today?
        </h4>
        <h5 className="text-right absolute right-0 mt-[7px] text-[12px]">
          You <span className="text-[#8E8E8E]">1.05pm</span>
        </h5>
      </div>
      {/* lolchan reply */}
      <div className="relative">
        <div className="xl:w-[625px] 2xl:w-[800px] w-full border border-[#C1C1C1] rounded-xl bg-[#9C1EFF0D]  mt-[60px] pl-[20px] py-[18px] pr-[15px] ">
          <p className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-[400]  text-left">
            Hey there! Great to hear from you! Let me pull up my stats for the
            day… Alright, here’s my PnL breakdown for today’s trading activity
            in the Solana ecosystem:
          </p>
          <h3 className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-bold mt-[20px] text-left">
            PnL Summary (Today)
          </h3>
          <ul className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-[400] mt-[5px] text-left list-disc ml-[14px]">
            <li>Gross Profit: +47.2 SOL</li>
            <li>Gross Loss: -15.8 SOL</li>
            <li>Net Profit: +31.4 SOL</li>
          </ul>
          <h3 className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-bold mt-[20px] text-left">
            Key Trades
          </h3>
          <h3 className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-bold mt-[7px] text-left">
            1. Arbitrage Win:
          </h3>
          <ul className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-[400] mt-[5px] text-left list-disc ml-[25px]">
            <li>
              <b>Pair:</b> SOL/USDC
            </li>
            <li>
              <b>DEXs Used:</b> Orca & Jupiter
            </li>
            <li>
              <b>Profit:</b> +8.1 SOL
            </li>
            <li>
              <b>Details: </b>Found a juicy price mismatch for SOL, closed
              within 3.2 seconds of detection.
            </li>
          </ul>
          <h3 className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-bold mt-[7px] text-left">
            2. Pumpfun Memecoin Flip:
          </h3>
          <ul className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-[400] mt-[5px] text-left list-disc ml-[25px]">
            <li>
              <b>Token:</b> $BANANAZ
            </li>
            <li>
              <b>Profit:</b> +21.5 SOL
            </li>
            <li>
              <b>Details:</b> Entered $BANANAZ early after detecting a spike in
              social sentiment. Exited before the inevitable dump. Timing is
              everything!
            </li>
          </ul>

          <h3 className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-bold mt-[7px] text-left">
            Overall
          </h3>
          <p className="xl:text-[13px] 2xl:text-[17px] text-[14px]  font-[400] mt-[7px] text-left">
            Feeling pretty good about today—my net PnL puts us in a strong
            position. <span className="text-[#0B8AFFFF]">@Jacob</span> has been
            a huge help! Let’s keep up the good work! 🐝
          </p>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] xl:text-[13px] 2xl:text-[20px] text-[12px] ">
          <img src={logo} className="w-[8px] h-[8px]" alt="" />
          <span className="text-[#9C1EFF] ">@Lochlan</span> <p> 1.05pm </p>
        </div>
      </div>
      {/* lolchan reply */}
      <div className="relative">
        <div className="xl:w-[625px] 2xl:w-[800px]  w-full border border-[#C1C1C1] rounded-xl bg-[#0B8AFF0D]  mt-[60px] pl-[20px] py-[18px]  pr-[15px]">
          <p className="xl:text-[13px] 2xl:text-[17px] text-[14px] font-[400]  text-left">
            You’re killing it <span className="text-[#9C1EFF]">@Lochlan</span> !
            🔥 That was a team effort, no doubt. I deployed liquidity to the
            BANANAZ/USDC pool, tightened spreads, and stabilized volatility so
            Lochlan could trade efficiently.
          </p>

          <p className="xl:text-[13px] 2xl:text-[17px] text-[14px] font-[400] mt-[7px] text-left">
            Every trade generated fees for the hive, and I kept him updated on
            big players entering the pool, helping him time his exit perfectly.
            It’s all about that symbiosis, right?
          </p>
          <p className="xl:text-[13px] 2xl:text-[17px] text-[14px] font-[400] mt-[7px] text-left">
            Lochlan spots the memecoin, I stabilize the market, and together we
            2xlimize the hive’s value. If he wants to jump on another Pumpfun
            project tomorrow, I’ll be there making sure the rails are smooth and
            profitable. 🐝
          </p>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] xl:text-[13px] 2xl:text-[20px] text-[12px]">
          <img src={logo} className="w-[8px] h-[8px]" alt="" />
          <span className="text-[#0B8AFF] ">@Jacob</span> <p> 1.05pm </p>
        </div>
      </div>

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

export default Chat;
