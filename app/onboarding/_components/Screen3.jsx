import React from "react";
import Image from "next/image";
import UserNameandBalance from "./UserNameandBalance";
const Screen3 = ({ setVisibleComponent }) => {
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
      <UserNameandBalance setVisibleComponent={setVisibleComponent} backTo={'B'}/>
      <div className="border-2 border-pink-700 mx-[16px] px-[10px] my-[50px] py-[10px] rounded-[7px] bg-[#100F1F]">
        <div className="grid grid-cols-2 gap-36">
          {/* First grid with 3 items */}
          <div className="flex gap-[6px]">
            <div className="relative flex items-center justify-center">
              <img src="/komenaut.png" className="h-[65px] min-w-[65px]" />
              <div className="absolute text-xs px-[3px] rounded pb-[2px]  top-[45px] bg-pink-700">
                primary
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-medium">Komenaut</p>
              <div className="flex">
                {" "}
                <p className="text-xs text-gray-600">
                  {formatString("0x67278681a8e")}
                </p>
                <img src="./Copy.svg" />
              </div>
            </div>
          </div>

          {/* Second grid item */}
          <div className="flex flex-col font-semibold items-end justify-center">
            <div className="flex items-center gap-3">
              <p>$23,114</p>
            </div>
            <img src="./metamask icon.svg" />
          </div>
        </div>
      </div>
      <div className="bg-[#100F1F] rounded-[12px] p-[16px]">
        <div className="py-[2px] rounded-[8px] text-xs px-[30px] text-center my-[15px] text-yellow-600">
          For this wallet {formatString("0x67a876c37d1aBE")} pledge $5,500
          equivalent of assets.
        </div>
        <button
          onClick={(e) => setVisibleComponent("D")}
          className="w-full primaryGradient1 py-[14px] px-[24px] rounded-full text-lg font-medium flex justify-center"
        >
          Approve cross-chain Liquidity
        </button>
      </div>
    </div>
  );
};

export default Screen3;
