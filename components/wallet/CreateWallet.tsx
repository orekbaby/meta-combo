import React from "react";
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";

export default function CreateWallet() {
  return (
    <div className="flex justify-between gap-10 mb-3">
      <div className="flex items-center justify-center gap-6 bg-[#063172] px-3 rounded-[25px]">
        <p className="font-semibold text-[14sm] leading-[24px]">Wallet 1</p>
        <IoCloseSharp className="text-xl" />
      </div>

      <Button
        size="sm"
        className="button2 bg-[#0d6efd] text-[#e8e8e8] rounded-[5px] text-[14px] leading-[23.8px]"
      >
        Create Wallet
      </Button>
    </div>
  );
}
