import React from "react";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { copyTradesMock } from "@/utils/copyMockData2";

export default function CopyTrades() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Time
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Address
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Status
            </TableHead>
            <TableHead className=" font-semibold md:font-bold lg:font-bold text-[12px]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {copyTradesMock?.map((row, index) => (
            <TableRow key={index} className="border-[#212E40]">
              <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
                {row.time}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.address}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.status.toLowerCase() === "completed" ? (
                  <span style={{ color: "#06C270" }}> {row.status} </span>
                ) : (
                  <span style={{ color: "#FFC107" }}>{row.status}</span>
                )}
              </TableCell>

              <TableCell className=" flex items-center gap-1 font-normal text-[9px] md:text-sm lg:text-sm">
                <BiPencil className="text-white" />
                <MdDeleteOutline className="text-xs md:text-sm lg:text-sm text-white" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export { CopyTrades };
