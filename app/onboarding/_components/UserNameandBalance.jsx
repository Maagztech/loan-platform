import React from "react";
import Image from "next/image";
const UserNameandBalance = ({setVisibleComponent, backTo}) => {
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
    <div className="container mx-auto my-[20px]">
      {/* Main grid container */}
      <div className="grid grid-cols-2 gap-32 px-[10px]">
        {/* First grid with 3 items */}
        <div className="flex gap-[6px]">
          <div onClick={()=>setVisibleComponent(backTo)} className="flex items-center justify-center cursor-pointer">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 11.8197L2 6.99969L6 2.17969"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/usericon.png" height={40} width={40} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-medium">Madmax</p>
            <p className="text-xs text-gray-600">{formatString("0x67278681a8e")}</p>
          </div>
        </div>

        {/* Second grid item */}
        <div className="flex flex-col font-semibold items-end justify-center">
          <p>Balance</p>
          <p className="text-gray-500 text-sm">0.0008 BTC</p>
        </div>
      </div>
    </div>
  );
};

export default UserNameandBalance;
