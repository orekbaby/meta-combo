import React from "react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import WalletSection from "@/components/wallet/WalletSection";
import Tabs from "@/components/wallet/Tabs";



export default function Home() {
  return (
    <main className="bg-[#0A1019] text-white" style={{ marginLeft: "0", padding: "0" }}>
      {/* navigation top */}
      <Navigation />

      {/* sidebar */}
      <div className="flex max-w-7-xl mx-auto">
        <Sidebar />

        {/* main section for contents */}
        <div style={{ flex: "1", padding: "15" }}>
          <section>
            <h1 className="text-[27] leading-[35.1px] font-bold mb-5 ">
              My Wallet
            </h1>
            <WalletSection />

            {/* Headings h3 */}
            <Tabs />
            {/* Paragraph styles heading and table */}
            <Table />
          </section>
        </div>
      </div>
    </main>
  );
}