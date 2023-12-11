import React from "react";

import { MdOutlineContentCopy } from "react-icons/md";
import Send from "@/components/wallet/Send";
import { Settings } from "@/components/wallet/Settings";
import CreateWallet from "@/components/wallet/CreateWallet";

export default function WalletSection() {
  return (
    <>
      <div className="w-full md:w-[50%] lg:w-50%] h-[170px] p-[10px] md:p-[16px] lg:p-[16px] rounded-[8px] md:border-[1px] lg:border-[1px] border-[#212E40] mb-10">
        <CreateWallet />
        <div className="mt-10 md:mt-5 lg:mt-5 mb-2 flex items-center ">
          <p className=" text-[12px] md:text-[14sm] lg:text-[14sm] font-semibold leading-[20.4px] md:leading-[24px] lg:[24px]">
            Wallet Balance:
          </p>
          <p className="font-bold text-[14px] md:text-[24px] lg:[24px] leading-[18.2px] md:leading-[31.2px] lg:leading-[31.2px] text-[#B4D2FE] ml-2">
            $157,676.77
          </p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className=" flex items-center justify-between gap-2">
            <p className=" text-[8.5px] md:text-[16px] lg:text-[16px]  leading-[14.45px] md:leading-[27px]lg:leading-[27px]  font-normal">
              <span className="hidden md:inline lg:inline">
                0x9c8bb8355629a72eb506d14b29bc3a9856107d21
              </span>
              <span className="inline md:hidden lg:hidden">
                0x9c8bb8355629a72eb1
              </span>
            </p>
            <MdOutlineContentCopy className="text-[#DBDBDC] text-lg mr-2 cursor-pointer" />
          </div>

          <div className="flex gap-4 items-center ">
            <Send />
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
}
