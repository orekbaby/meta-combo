import React from "react";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-2 md:p-5 lg:p-5 bg-[#0B0F16] w-full ">
      <Image
        src="/Metadapplogo.png"
        alt="Logo"
        width={28}
        height={44}
        className="mr-4 lg:w-[40px]"
      />

      <div className="flex items-center pr-2 md:pr-5 lg-pr-5">
        {/* Your notification icon goes here */}
        <IoMdNotificationsOutline className="mr-3 md:mr-6 lg:6 text-[18px] h-[22px]" />
        <Image
          src="/avatar.png"
          width={27}
          height={27}
          alt="Avatar"
          className="rounded-full"
        />
        <TbMenuDeep className=" ml-3 md:ml-6 lg:ml-6 inline text-[20px] h-[14px] md:hidden lg:hidden" />
      </div>
    </header>
  );
}
