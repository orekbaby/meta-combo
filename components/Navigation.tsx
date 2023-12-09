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
        width={34}
        height={54}
        className="mr-4"
      />

      <div className="flex items-center pr-2 md:pr-5 lg-pr-5">
        {/* Your notification icon goes here */}
        <IoMdNotificationsOutline className="mr-3 md:mr-6 lg:6 text-2xl" />
        <Image
          src="/avatar.png"
          width={32}
          height={32}
          alt="Avatar"
          className="rounded-full"
        />
        <TbMenuDeep className=" ml-3 md:ml-6 lg:ml-6 inline text-2xl md:hidden lg:hidden" />
      </div>
    </header>
  );
}
