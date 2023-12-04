import React from 'react'

export default function Tabs() {
  return (
    <>
      <div className="h3-styles flex bg-[#161F2C]  text-[#E7E7E7] gap-28 px-3 py-2 w-[1276px] h-[53] rounded-8 mt-12 mb-5">
        <div className="bg-[#084298] px-1 py-1">
          <h3 className="text[16px] font-bold leading-[21px] text-center">
            TOKEN HOLDINGS
          </h3>
        </div>

        <div>
          <h3>WALLET PERFORMANCE</h3>
        </div>
        <div>
          <h3>TX HISTORY</h3>
        </div>
      </div>
    </>
  );
}
