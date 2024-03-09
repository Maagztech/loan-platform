import React from "react";

const Screen5 = () => {
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
    <div className="py-[40px] mx-auto">
      <div className="primaryGradient2 flex flex-col text-center py-[10px] rounded-[5px]  px-[50px]">
        <img
          src="./usericon.png"
          alt="user image"
          className="h-[90px] w-[90px]"
        />
        <p className="text-gray-500 text-xs bg-black px-2 rounded-full">
          {formatString("0x67278681a8e")}
        </p>
        <p className="text-white font-semibold my-[4px]">3.0052 ETH</p>
        <p className="text-black text-xs font-semibold">$9,880.37</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center my-[10px]">
        <img src="./Arrow 326.svg" className="w-[20px] mb-[5px]" />
        <div className="bg-blue-500 font-medium text-black text-[14px] px-[4px] rounded-full">Approved $5,500 worth of ETH</div>
        <img src="./Ellipse group.svg" className="my-[4px]" />
        <img src="./Arrow 327.svg" className="w-[20px] mb-[5px]" />
        <div className="bg-[#E55A74] font-medium text-black text-[14px] px-[4px] rounded-full">Depositing $4,700 worth of BTC</div>
      </div>
      <div className="primaryGradient2 flex flex-col text-center py-[10px] rounded-[5px]  px-[50px] mt-[40px]">
        <img
          src="./usericon.png"
          alt="user image"
          className="h-[90px] w-[90px]"
        />    
        <p className="text-gray-500 text-xs bg-black px-2 rounded-full">
          {formatString("0x67278681a8e")}
        </p>
        <p className="text-white font-semibold my-[4px]">3.0052 ETH</p>
        <p className="text-black text-xs font-semibold">$9,880.37</p>
      </div>
    </div>
  );
};

export default Screen5;
