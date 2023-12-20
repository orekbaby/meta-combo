import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { transferTradesMock } from "@/utils/copyMockData3";

export default function Transfers() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none w-full">
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px] md:text-base lg:text-base">
              Time
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px] md:text-base lg:text-base">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transferTradesMock?.map((row, index) => (
            <TableRow key={index} className="border-[#212E40]">
              <TableCell className="items-center font-normal text-[9px] md:text-sm lg:text-sm">
                {row.time}
              </TableCell>
              <TableCell className=" flex items-center gap-1 font-normal text-[9px] md:text-sm lg:text-sm">
                {row.action.toLowerCase() === "sent" ? (
                  <span className="flex items-center gap-1">
                    {" "}
                    {row.action}
                    <MdArrowOutward className="w-[12px] h-[12px] md:w-[20px] lg:h-[20px] text-[#A52A27]" />
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    {row.action}
                    <FiArrowDownRight className="w-[12px] h-[12px] md:w-[20px] lg:h-[20px] text-[#4CA244]" />
                  </span>
                )}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                <div className="flex items-center gap-1">
                  <Image
                    width={12}
                    height={12}
                    src="/symbol.png"
                    className="md:w-[18px] lg:w-[18px]"
                    alt="binance"
                  />
                  <p className="font-normal text-[9px] md:text-sm lg:text-sm">
                    Binance
                  </p>
                </div>
                {row.binance}
              </TableCell>
              <TableCell className="flex gap-1 items-center font-normal text-[9px] md:text-sm lg:text-sm">
                <Image
                  width={10}
                  height={10}
                  src="/Eth.png"
                  className="md:w-[24px] lg:w-[24px]"
                  alt="eth"
                />
                <span
                  className="font-normal text-[9px] md:text-xs lg:text-xs"
                  style={{
                    color: [0, 2, 4, 6].includes(index) ? "red" : "green",
                  }}
                >
                  {row.token}
                </span>
              </TableCell>

              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.gasFee}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export { Transfers };
