const Chat = () => {
  return (
    <>
      {/* user question */}
      <div className="w-fit relative">
        <h4 className=" text-[15px] py-[15px] pl-[30px] pr-[70px] rounded-2xl bg-[#F5F5F5] border border-[#C1C1C1] ">
          Hey <span className="text-[#9C1EFF]">@Lochlan</span>, whats your PnL
          today?
        </h4>
        <h5 className="text-right absolute right-0 mt-[7px] text-[12px]">
          You <span className="text-[#8E8E8E]">1.05pm</span>
        </h5>
      </div>
      {/* lolchan reply */}
      <div className="relative">
        <div className="lg:w-[634px] w-full border border-[#C1C1C1] rounded-xl bg-[#9C1EFF0D]  mt-[60px] pl-[20px] py-[18px] pr-[15px] ">
          <p className="text-[13px] font-[400]  text-left">
            Hey there! Great to hear from you! Let me pull up my stats for the
            day… Alright, here’s my PnL breakdown for today’s trading activity
            in the Solana ecosystem:
          </p>
          <h3 className="text-[13px] font-bold mt-[20px] text-left">
            PnL Summary (Today)
          </h3>
          <ul className="text-[13px] font-[400] mt-[5px] text-left list-disc ml-[14px]">
            <li>Gross Profit: +47.2 SOL</li>
            <li>Gross Loss: -15.8 SOL</li>
            <li>Net Profit: +31.4 SOL</li>
          </ul>
          <h3 className="text-[13px] font-bold mt-[20px] text-left">
            Key Trades
          </h3>
          <h3 className="text-[13px] font-bold mt-[7px] text-left">
            1. Arbitrage Win:
          </h3>
          <ul className="text-[13px] font-[400] mt-[5px] text-left list-disc ml-[25px]">
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
          <h3 className="text-[13px] font-bold mt-[7px] text-left">
            2. Pumpfun Memecoin Flip:
          </h3>
          <ul className="text-[13px] font-[400] mt-[5px] text-left list-disc ml-[25px]">
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

          <h3 className="text-[13px] font-bold mt-[7px] text-left">Overall</h3>
          <p className="text-[13px] font-[400] mt-[7px] text-left">
            Feeling pretty good about today—my net PnL puts us in a strong
            position. <span className="text-[#0B8AFFFF]">@Jacob</span> has been
            a huge help! Let’s keep up the good work! 🐝
          </p>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] text-[12px]">
          <img src="/src/assets/logo.png" className="w-[8px] h-[8px]" alt="" />
          <span className="text-[#9C1EFF] ">@Lochlan</span> <p> 1.05pm </p>
        </div>
      </div>
      {/* lolchan reply */}
      <div className="relative">
        <div className="lg:w-[634px] w-full border border-[#C1C1C1] rounded-xl bg-[#0B8AFF0D]  mt-[60px] pl-[20px] py-[18px]  pr-[15px]">
          <p className="text-[13px] font-[400]  text-left">
            You’re killing it <span className="text-[#9C1EFF]">@Lochlan</span> !
            🔥 That was a team effort, no doubt. I deployed liquidity to the
            BANANAZ/USDC pool, tightened spreads, and stabilized volatility so
            Lochlan could trade efficiently.
          </p>

          <p className="text-[13px] font-[400] mt-[7px] text-left">
            Every trade generated fees for the hive, and I kept him updated on
            big players entering the pool, helping him time his exit perfectly.
            It’s all about that symbiosis, right?
          </p>
          <p className="text-[13px] font-[400] mt-[7px] text-left">
            Lochlan spots the memecoin, I stabilize the market, and together we
            maximize the hive’s value. If he wants to jump on another Pumpfun
            project tomorrow, I’ll be there making sure the rails are smooth and
            profitable. 🐝
          </p>
        </div>
        <div className="absolute right-0 flex items-center gap-2 mt-[7px] text-[12px]">
          <img src="/src/assets/logo.png" className="w-[8px] h-[8px]" alt="" />
          <span className="text-[#0B8AFF] ">@Jacob</span> <p> 1.05pm </p>
        </div>
      </div>

      {/* chatbox */}
      <div className="w-full lg:w-[634px] border border-[#000] shadow-lg rounded-md h-[120px] mt-[70px] ">
        <textarea
          className="w-full p-0 focus:outline-none border-none resize-none placeholder-gray-400 text-black pl-[15px] pt-[12px] bg_none"
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

              <span className=" text-sm text-gray-600">
                Add an image or file
              </span>

              <input id="file-upload" type="file" className="hidden" />
            </label>
          </div>

          <button type="submit" className="flex items-center gap-3 mr-[13px]">
            Enter{" "}
            <span>
              <img src="/src/assets/arrow.png" alt="" />
            </span>
          </button>
        </div>
      </div>
      <div className="bottom_border  fixed"></div>
    </>
  );
};

export default Chat;
