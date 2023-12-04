import React from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

export default function SideBar() {
  return (
    <div
      style={{
        width: "80px",
        height: "100vh",
        backgroundColor: "#0B0F16",
        padding: "5px",
        margin: "0",
        flexShrink: "0",
      }}
    >
      <div className="flex flex-col gap-10 items-center justify-center mb-10">
        <div>
          <FaHome />
        </div>
        <div className="flex flex-col items-center py-6 border-y-2 border-[#212E40] w-full">
          <div className="mb-10">
            <Image src="/hovering-text.png" width={12} height={8} alt="hovering" />
          </div>
          <div>
            <Image src="/hovering-text.png" width={12} height={8} alt="hovering" />
          </div>
        </div>
        <div className=" pb-2">
          <Image src="/account-balance.png" width={12} height={8} alt="account-bal" />
        </div>
        <div className=" pb-2">
          <Image src="/payments.png" width={12} height={8} alt="payments" />
        </div>
        <div className=" pb-2">
          <Image src="/Vector.png" width={12} height={8} alt="vector" />
        </div>
        <div className=" pb-2">
          <Image src="/settings.png" width={12} height={8} alt="settings" />
        </div>
        <div className=" pb-2">
          <IoCloseSharp className="w-[12 h-[8]" />
        </div>
        <div className=" pb-2">
          <Image src="/message.png" width={12} height={8} alt="message" />
        </div>
      </div>
    </div>
  );
}
export { SideBar };
