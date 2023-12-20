import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Limit from "@/components/wallet/txHistoryTabs/Limit";
import All from "@/components/wallet/txHistoryTabs/All";
import Transfers from "@/components/wallet/txHistoryTabs/Transfers";
import CopyTrades from "@/components/wallet/txHistoryTabs/CopyTrades";

export default function InnerTabs() {
  return (
    <Tabs defaultValue="All" className="w-full">
      <TabsList className="w-full flex justify-between md:gap-10 lg:gap-10  mb-10 items-center md:justify-start lg:justify-start">
        <TabsTrigger
          className=" w-1/4 md:w-[100px] lg:w-[100px] font-bold  focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-base lg:text-base border-b-[#FFC107]"
          value="All"
        >
          {" "}
          All
        </TabsTrigger>
        <TabsTrigger
          className=" w-1/4 md:w-[100px] lg:w-[100px] font-bold  focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-base lg:text-base"
          value="Limit"
        >
          Limit
        </TabsTrigger>
        <TabsTrigger
          className=" w-1/4 md:w-[100px] lg:w-[100px] font-bold  focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-base lg:text-base"
          value="CopyTrades"
        >
          Copy Trades
        </TabsTrigger>
        <TabsTrigger
          className=" w-1/4 md:w-[100px] lg:w-[100px] font-bold  focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-base lg:text-base"
          value="Transfers"
        >
          {" "}
          Transfers
        </TabsTrigger>
      </TabsList>
      <TabsContent value="All">
        <All />
      </TabsContent>
      <TabsContent value="Limit">
        <Limit />
      </TabsContent>
      <TabsContent value="CopyTrades">
        <CopyTrades />
      </TabsContent>
      <TabsContent value="Transfers">
        <Transfers />
      </TabsContent>
    </Tabs>
  );
}
