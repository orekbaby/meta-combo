import React from "react";
import { walletTokenTable } from "@/utils/mockData";
import Image from "next/image";

export default function Table() {
  return (
    <>
      <div className="w-full">
        <div className="w-full overflow-x-hidden">
          <table className="w-full text-left">
            {/* ... Your table structure and mapping */}
            <thead className="bg-[#161F2C] font-bold leading-tight w-full">
              <tr className="flex items-center justify-between py-4 md:px-4 lg:px-4 w-full">
                <th className="w-2/4 md:w-1/4 lg:w-1/4">
                  <div>
                    <p className="text-[10px] md:text-base lg:text-base">
                      Wallets
                    </p>
                  </div>
                </th>
                <th className="w-1/4">
                  <div>
                    <p className="text-[10px] md:text-base lg:text-base">
                      Price
                    </p>
                  </div>
                </th>
                <th className="w-1/4">
                  <div>
                    <p className="text-[10px] md:text-base lg:text-base">
                      Balance
                    </p>
                  </div>
                </th>
                <th className="w-1/4">
                  <div>
                    <p className="text-[10px] md:text-base lg:text-base">
                      Total
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {walletTokenTable?.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "w-full"
                      : "w-full bg-[#17212F] border-y border-[#212E40]"
                  }
                >
                  <td className="w-2/4 md:w-1/4 lg:w-1/4">
                    <div className=" flex items-center justify-between w-[90%] md:w-[80%] lg:w-[80%]">
                      <div className=" flex items-center ">
                        <Image
                          src={row.logo}
                          width={20}
                          height={20}
                          alt=""
                          className="mr-2"
                        />
                        <p className="text-[9px] md:text-base lg:text-base uppercase hidden md:inline lg:inline">
                          {row.token && row.token.length > 13
                            ? `${row.token.slice(0, 13)}...`
                            : row.token}
                        </p>
                      </div>
                      <span
                        className={
                          row.type === ""
                            ? "hidden"
                            : "inline bg-[#017B46] px-2 py-1 text-[9px] md:text-[10px] lg:text-[10px] text-[#E7E7E7] capitalize text-center font-semibold rounded-md"
                        }
                      >
                        {row.type}
                      </span>
                    </div>
                  </td>
                  <td className="w-1/4">
                    <p className="text-[9px] md:text-base lg:text-base">
                      ${row.price}
                    </p>
                  </td>
                  <td className="w-1/4">
                    <p className="text-[10px] md:text-base lg:text-base">
                      ${row.balance}
                    </p>
                  </td>
                  <td className="w-1/4">
                    <p className="text-[9px] md:text-base lg:text-base">
                      ${row.total}
                    </p>
                  </td>
                </tr>
              ))};
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export { Table };
