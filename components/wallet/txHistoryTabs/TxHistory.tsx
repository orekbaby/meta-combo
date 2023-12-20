import React from "react";

import InnerTabs from "@/components/wallet/txHistoryTabs/InnerTabs";

export default function TxHistory() {
  return (
    <>
      <div className="w-full mb-4 flex justify-start md:justify-between lg:justify-between gap-10 ml-0 md:ml-4 lg:ml-4 text-xs font-semibold md:font-bold lg:font-bold">
        <InnerTabs />
      </div>
    </>
  );
}
