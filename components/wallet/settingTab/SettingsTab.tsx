import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Security from "@/components/wallet/settingTab/Security";
import WalletSettings from "@/components/wallet/settingTab/WalletSettings";

export default function SettingsTab() {
  return (
    <>
      <Tabs defaultValue="WalletSettings" className="w-full">
        <TabsList className="flex mt-6 justify-between gap-0 md:gap-3 lg:gap-3 bg-[#0A1019] mb-10 items-center md:justify-start lg:justify-start border-b-[1px] border-[#212E40]">
          <TabsTrigger
            className=" mb-3 w-[140px] md:w-[130px] lg:w-[130px] px-10  font-bold text-[10px] md:text-base lg:text-base ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#E7E7E7]"
            value="TokenHoldings"
          >
            {" "}
            Wallet Settings
          </TabsTrigger>
          <TabsTrigger
            className="mb-3 w-[140px] md:w-[130px] lg:w-[130px] px-10  font-bold ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298]  data-[state=active]:text-[#E7E7E7] text-[#E7E7E7] text-[10px] md:text-base lg:text-base"
            value="WalletPerformance"
          >
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="WalletSettings">
          <WalletSettings />
        </TabsContent>
        <TabsContent value="Security">
          <Security />
        </TabsContent>
      </Tabs>
    </>
  );
}
