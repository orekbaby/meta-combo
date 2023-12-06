import React from 'react'

export default function TableHeader() {
  return (
    <div className="bg-[#161F2C] font-bold leading-tight w-[100%]">
      <div className="flex items-center justify-between py-3 md:px-4 lg:px-4 border-none w-[100%]">
        <div className="w-2/4 md:w-1/4 lg:w-1/4  ml-8">
          <p className="text-[10px] md:text-base lg:text-base">Wallets</p>
        </div>
        <div className="w-1/4 ml-8">
          <p className="text-[10px] md:text-base lg:text-base">Price</p>
        </div>
        <div className="w-1/4 ml-4">
          <p className="text-[10px] md:text-base lg:text-base">Balance</p>
        </div>
        <div className="w-1/4 ml-16">
          <p className="text-[10px] md:text-base lg:text-base">Total</p>
        </div>
      </div>
    </div>
  );
}
