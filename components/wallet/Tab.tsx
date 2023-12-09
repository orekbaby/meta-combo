import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TokenTable from "@/components/wallet/tokenHoldings/TokenTable";
import { WalletPerformance } from "@/components/wallet/walletPerformance/WalletPerformance";
import { TxHistory } from "@/components/wallet/txHistory/TxHistory";

export default function Tab() {
  return (
    <>
      <Tabs defaultValue="TokenHoldings" className="w-full">
        <TabsList className="flex justify-between bg-[#161F2C] mb-10 items-center md:justify-start lg:justify-start">
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-10 lg:px-10 font-bold text-[10px] md:text-base lg:text-base ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#E7E7E7]"
            value="TokenHoldings"
          >
            {" "}
            Token Holdings
          </TabsTrigger>
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-10 lg:px-10 font-bold ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298]  data-[state=active]:text-[#E7E7E7] text-[#E7E7E7] text-[10px] md:text-base lg:text-base"
            value="WalletPerformance"
          >
            Wallet Performance
          </TabsTrigger>
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-10 lg:px-10 font-bold ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298]  data-[state=active]:text-[#E7E7E7] text-[#E7E7E7] text-[10px] md:text-base lg:text-base"
            value="TxHistory"
          >
            Tx History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="TokenHoldings">
          <TokenTable />
        </TabsContent>
        <TabsContent value="WalletPerformance">
          <WalletPerformance />
        </TabsContent>
        <TabsContent value="TxHistory">
          <TxHistory />
        </TabsContent>
      </Tabs>
    </>
  );
}
