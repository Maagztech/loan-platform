import React from "react";
import Image from "next/image";
import UserNameandBalance from "./UserNameandBalance";
const Screen4 = ({ setVisibleComponent }) => {
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
      <UserNameandBalance setVisibleComponent={setVisibleComponent} backTo={'C'}/>
      <div className="bg-[#100F1F] rounded-[12px] p-[16px]">
        <h1 className="text-gray-500 font-semibold">
          ETH WALLET CONTRACT SIGN
        </h1>
        <div className="flex justify-between my-[10px] px-[10px]">
          <p>1 item</p>
          <p>Clear all</p>
        </div>
        <div className="bg-[#1B192B] p-[10px] rounded-[8px]">
          <div className="grid grid-cols-2 gap-36">
            {/* First grid with 3 items */}
            <div className="flex gap-[6px]">
              <div className="flex items-center justify-center">
                <img src="/nodemonkes.png" className="h-[65px] min-w-[65px]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">ETH</p>
              </div>
            </div>

            {/* Second grid item */}
            <div className="flex flex-col font-semibold items-end justify-center">
              <div className="flex items-center gap-3">
                <p>0.685</p>
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.7"
                    d="M5.24391 0.9375L0.832031 7.6575L5.24391 10.0575L9.65579 7.6575L5.24391 0.9375ZM0.832031 8.4575L5.24391 14.0575L9.65579 8.4575L5.24391 10.8575L0.832031 8.4575Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">$ 5,516.50</p>
            </div>
          </div>
        </div>
        <hr className="border-gray-500 my-[10px]" />
        <div className="flex justify-between my-[15px] px-[10px]">
          <p>Collateralization</p>
          <p className="text-green-500 font-semibold">Enabled</p>
        </div>
        <div className="flex justify-between text-center my-[10px] px-[10px]">
          <div>Upfront Cost</div>
          <div className="flex flex-col font-semibold items-end justify-center text-gray-400">
            <p>$55.16</p>
          </div>
        </div>
        <hr className="border-gray-500 mb-[20px]" />
        <hr className="border-gray-500 mb-[10px]" />
        <div className="text-yellow-600 py-[2px] rounded-[8px] text-xs px-[30px] text-center">
          Instant cash of worth $4700 will be deposited here{" "}
          {formatString("0x67278681a8e")}
        </div>
        <button
          onClick={(e) => setVisibleComponent("E")}
          className="w-full primaryGradient py-[14px] px-[24px] rounded-full text-lg font-medium flex justify-center"
        >
          Contract Approval
        </button>
      </div>
    </div>
  );
};

export default Screen4;
