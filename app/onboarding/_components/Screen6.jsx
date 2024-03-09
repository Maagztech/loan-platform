import React from "react";
import Image from "next/image";
import UserNameandBalance from "./UserNameandBalance";
const Screen6 = ({ setVisibleComponent }) => {
  return (
    <div>
      <UserNameandBalance setVisibleComponent={setVisibleComponent} backTo={'E'}/>
      <div className="bg-[#100F1F] rounded-[12px] p-[16px]">
        <h1 className="text-gray-500 font-semibold">Your Cart</h1>
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
                <p className="font-medium">Nodemonkes</p>
                <p className="text-xs text-gray-600">#84317</p>
                <div>
                  <div className="flex gap-2 bg-pink-600 mr-12 px-[5px] rounded-full my-[3px]">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second grid item */}
            <div className="flex flex-col font-semibold items-end justify-center">
              <div className="flex items-center gap-3">
                <p>0.685</p>
                <img src="Bitcoin.svg"/>
              </div>
              <p className="text-gray-500 text-sm">$ 47,116.50</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-[15px] px-[10px] text-xs ">
          <p>Network Fee</p>
          <p className="text-gray-500 font-semibold">$288.50</p>
        </div>
        <hr className="border-gray-500" />
        <div className="flex justify-between text-center my-[10px] px-[10px]">
          <div>You Pay</div>
          <div className="flex flex-col font-semibold items-end justify-center">
            <div className="flex items-center gap-3">
              <p>0.0152</p>
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
            <p className="text-gray-500 text-xs">$ 47,120</p>
          </div>
        </div>
        <hr className="border-gray-500 mb-[10px]" />
        <hr className="border-gray-500 my-[15px]" />
        <button
          onClick={(e) => setVisibleComponent("G")}
          className="w-full primaryGradient py-[14px] px-[24px] rounded-full text-lg font-medium flex justify-center"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Screen6;
