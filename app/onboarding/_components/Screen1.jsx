import React from "react";
import Image from "next/image";
import UserNameandBalance from "./UserNameandBalance";
const Screen1 = ({ setVisibleComponent }) => {
  return (
    <div>
      <UserNameandBalance setVisibleComponent={setVisibleComponent} backTo={'A'}/>
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
        <div className="bg-yellow-500 py-[2px] rounded-[8px] text-xs text-black px-[30px] text-center">
          Your wallet balance is low ! instantly boost liquidity here by
          verifying assets on Ethereum.
          <div className="w-full flex justify-center my-[5px]">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.08913 11.2809H5.17913V18.4809C5.17913 20.1609 6.08913 20.5009 7.19913 19.2409L14.7691 10.6409C15.6991 9.59087 15.3091 8.72087 13.8991 8.72087H10.8091V1.52087C10.8091 -0.159126 9.89913 -0.499126 8.78913 0.760874L1.21913 9.36087C0.299125 10.4209 0.689126 11.2809 2.08913 11.2809Z"
                fill="#FE508F"
              />
            </svg>
          </div>
        </div>
        <hr className="border-gray-500 my-[15px]" />
        <button
          onClick={(e) => setVisibleComponent("B")}
          className="w-full primaryGradient py-[14px] px-[24px] rounded-full text-lg font-medium flex justify-center"
        >
          Get Instant Bitcash
        </button>
      </div>
    </div>
  );
};

export default Screen1;
