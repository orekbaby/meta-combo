import React from "react";
import { walletTokenTable } from "@/utils/mockData";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

export default function TokenTable() {
  return (
    <>
      <div className="w-full">
        <div className="w-full overflow-x-hidden">
          <Table className=" text-left overflow-x-hidden">
         
            <TableBody className="w-full">
              {walletTokenTable?.map((row, index) => (
                <TableRow
                  key={index}
                  className={
                    index % 2 === 0
                      ? "w-full border-none"
                      : "w-full bg-[#17212F] border-none"
                  }
                >
                  <TableCell className="w-2/4 md:w-1/4 lg:w-1/4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
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
                  <TableCell className="w-1/4">
                    <p className="text-[9px] md:text-base lg:text-base">
                      ${row.total}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export { TokenTable };
