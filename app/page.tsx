import React from "react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Wallet from "@/components/wallet/Wallet";

export default function Home() {
  return (
    <main className="bg-[#0A1019]">
      <section className="mr-0 md:mr-15 lg:mr-15">
        <div className="">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Navigation />
          </div>
        </div>
        <div className="ml-0 md:ml-20 lg:ml-20 mt-16 md:mt-20 lg:mt-24">
          <h1 className="text-[16] md:text-[27px] lg:text-[27px] leading-[20.8px] md:leading-[35.1px] lg:leading-[35.1px]font-bold mb-5 ">
            My Wallet
          </h1>
          <Wallet />
        </div>
      </section>
    </main>
  );
}
