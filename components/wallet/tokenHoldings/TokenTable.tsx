import React from "react";
import { walletTokenTable } from "@/utils/mockData";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

export default function TokenTable() {
  return (
    <Table className="text-left overflow-x-hidden w-full">
      <TableHeader>
        <TableRow className="bg-[#161F2C] border-none px-10">
          <TableHead className="w-1/4 font-semibold md:font-bold lg:font-bold text-[10px] md:text-base lg:text-base">
            Wallets
          </TableHead>
          <TableHead className="w-1/4 ont-semibold md:font-bold lg:font-bold text-[10px] md:text-base lg:text-base">
            Price
          </TableHead>
          <TableHead className="w-1/4 ont-semibold md:font-bold lg:font-bold text-[10px] md:text-base lg:text-base">
            Balance
          </TableHead>
          <TableHead className="text-right w-1/4 font-semibold md:font-bold lg:font-bold text-[10px] md:text-base lg:text-base">
            Total
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {walletTokenTable?.map((row, index) => (
          <TableRow
            key={index}
            className={
              index % 2 === 0
                ? "w-full border-none px-10"
                : "w-full bg-[#17212F] border-none px-10"
            }
          >
            <TableCell className="font-medium flex items-center w-auto">
              <div className="w-[150px] md:w-[200px] lg:w-[200px] flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={row.logo}
                    width={20}
                    height={20}
                    alt=""
                    className="mr-2"
                  />
                  <p className="text-[9px] md:text-base lg:text-base uppercase">
                    {row.token && row.token.length > 13
                      ? `${row.token.slice(0, 13)}...`
                      : row.token}
                  </p>
                </div>
                <div className="">
                  <span
                    className={
                      row.type === ""
                        ? "hidden"
                        : "inline  bg-[#A52A27] text-[9px] md:text-[10px] lg:text-[10px] text-[#E7E7E7] capitalize text-center font-semibold rounded-xl px-6 py-2"
                    }
                  >
                    {row.type}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell className="w-1/4">
              <p className="text-[9px] md:text-base lg:text-base">
                ${row.price}
              </p>
            </TableCell>
            <TableCell className="w-1/4">
              <p className="text-[10px] md:text-base lg:text-base">
                ${row.balance}
              </p>
            </TableCell>
            <TableCell className="text-right w-1/4">
              <p className="text-[9px] md:text-base lg:text-base">
                ${row.total}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { TokenTable };
