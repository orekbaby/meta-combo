import React from "react";
import { walletKeys } from "@/utils/mockDataKeys";
import { MdOutlineContentCopy } from "react-icons/md";

export default function SecurityKeys() {
  return (
    <>
      {walletKeys?.map((row, index) => (
        <div key={index} className="bg-[0C141F] p-4">
          {/* Line 1 */}
          <div className="flex items-center">
            {/* Left side - H3 heading with a single background color */}
            <div
              className="bg-[#17212F] p-2 flex-shrink-0"
              style={{ width: "35%" }}
            >
              <h3 className="text-white font-semibold text-[8px]">
                {row.wallet}
              </h3>
            </div>
            {/* Right side - Contents of H3 with a different background color */}
            <div className="bg-[#212E40] p-2 flex items-center justify-between flex-grow">
              <p className="text-white font-normal text-[7px]md:text-xs lg:text-xs">
                {" "}
                {`${row.key.slice(0, 15)}...`}
              </p>
              <MdOutlineContentCopy className="text-[#DBDBDC] ml-3 text-lg cursor-pointer" />
            </div>
          </div>

          {/* Line 2 */}
          <div className="flex items-center">
            {/* Left side - Paragraph heading with a single background color */}
            <div
              className="bg-[#17212F] p-2 flex-shrink-0"
              style={{ width: "35%" }}
            >
              <p className="text-white font-semibold text-[10px]">
                Private Key:
              </p>
            </div>
            {/* Right side - Contents of Paragraph with a different background color */}
            <div className="bg-[#212E40] p-2 flex items-center justify-between flex-grow">
              <p className="text-white font-normal md:font-semibold lg:font-semiboldtext-[7px] md:text-[11px] lg:text-[11px]">
                {`${row.privateKey.slice(0, 15)}...`}
              </p>
              <MdOutlineContentCopy className="text-[#DBDBDC] text-lg ml-3 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
