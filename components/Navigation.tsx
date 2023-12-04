import React from "react";
import Image from "next/image";
import { IoNotifications } from "react-icons/io5";

export default function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        height: "82px",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#0B0F16",
        alignItems: "center", // Center items vertically
      }}
    >
      <div className="pl-2 mb-5">
        <Image
          className="items-center justify-center"
          src="/Metadapplogo.png"
          width={44}
          height={64}
          alt="logo"
        />
      </div>
      <div className="flex gap-6 items-center">
        <div className="" style={{ marginRight: "26" }}>
          <IoNotifications />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            className="rounded-full"
            src="/avatar.png"
            width={32}
            height={32}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}
export { Navigation };
