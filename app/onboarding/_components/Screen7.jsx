import React from "react";
import Image from "next/image";
import UserNameandBalance from "./UserNameandBalance";
const Screen6 = ({ setVisibleComponent }) => {
  return (
    <div>
      <UserNameandBalance setVisibleComponent={setVisibleComponent} backTo={'F'}/>
      <hr className="border-gray-500 my-[15px]" />
      <div className="flex flex-col items-center my-[50px]">
        <img src="./tick sign.svg" className="w-[50px] h-[50px]" />
        <h4 className="text-3xl font-bold mt-[20px]">Congratulations!</h4>
        <p className="text-sm mt-[5px] text-gray-300">
          your Transaction is successful!
        </p>
      </div>
      <div className="bg-[#1B192B] p-[20px]">
        <p className="text-lg font-semibold my-[15px]">Quantun Cats</p>
        <p className="text-green-500 text-sm">Confirmed</p>
        <hr className="border-gray-500 my-[15px]" />
        <p className="text-sm">Transaction ID:-</p>
        <div className="flex my-[15px]">
          <p className="text-xs text-gray-500">0xSw49jf949fkof444f4erf4</p>
          <img src="./copy.svg" />
        </div>
        <hr className="border-gray-500 mb-[15px]" />
        <p className="text-sm">You successfully minted this Ordinal!</p>
        <div className="flex gap-4 mt-[7px]">
          <div className="bg-gray-700 rounded-md p-[4px]">
            <img src="./Twitter.svg" alt="Twitter" />
          </div>
          <div className="bg-gray-700 rounded-md p-[4px]">
            <img src="./discord.svg" alt="Discord" />
          </div>
          <div className="bg-gray-700 rounded-md p-[4px]">
            <img src="./World.svg" alt="Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen6;
