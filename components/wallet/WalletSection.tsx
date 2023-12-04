import React from 'react'
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";

export default function WalletSection() {
  return (
    <>
      <div className="w-fit h-[150px] p-[10px] rounded-[8px] border-[1px] border-[#212E40]">
        <div className="flex justify-between gap-10 mb-3">
          <div className="pw flex items-center gap-4 bg-span bg-[#063172]">
            <div className="item">
              <span className="font-bold text-[14px] leading-[23.8px]">
                Wallet
              </span>
            </div>
            <div className="">
              <IoCloseSharp className="w-[12 h-[8]" />
            </div>
          </div>
          <div className="">
            <p className="button2 rounded text-[14px] leading-[23.8px]">
              Create Wallet
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-1xl font-bold text-[14px] leading-[24px]">
            Wallet Balance: $576.77
          </h2>
        </div>
        <div className="flex gap-6">
          <div className=" flex gap-2 items-center justify-between">
            <div className="">
              <p className=" text-[16px] font-normal leading-[27px]">
                0xyrefghhfdsssdfghnnnnbvc21ftgygttyuhu
              </p>
            </div>
            <div className="ml-3">
              <FaCopy />
            </div>
          </div>
          <div className="flex gap-4 items-center ">
            <Button
              className="bg-[#0C141F] text-white"
              variant="default"
              size="sm"
            >
              Send
            </Button>
            <Button
              className="bg-[#0C141F] text-white"
              variant="default"
              size="sm"
            >
              Settings
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
