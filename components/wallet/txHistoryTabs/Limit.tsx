import React from "react";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { limitTradesMock } from "@/utils/copyMockData";

export default function Limit() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="w-1/4 ">
              <Image
                src="/payments.png"
                width={20}
                height={20}
                alt="payments"
              />
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Type
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Token
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Quantity
            </TableHead>
            <TableHead className="font-semibold md:font-bold lg:font-bold text-[12px]">
              Exact Price
            </TableHead>
            <TableHead className=" font-semibold md:font-bold lg:font-bold text-[12px]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {limitTradesMock?.map((row, index) => (
            <TableRow key={index} className="border-[#212E40]">
              <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
                {row.payment}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.type}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.token}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.quantity}
              </TableCell>
              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                {row.exactPrice}
              </TableCell>
              <TableCell className="flex mt-2 items-center gap-1 font-normal text-[8px] md:text-sm lg:text-sm">
                {row.status.toLowerCase() === "completed" ? (
                  <span style={{ color: "#06C270" }}>{row.status}</span>
                ) : (
                  <span
                    className="flex items-center gap-1"
                    style={{ color: "#FFC107" }}
                  >
                    {row.status}
                    <MdDeleteOutline className="text-xs md:text-sm lg:text-sm text-[#FF3B3B]" />
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
