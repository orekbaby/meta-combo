import React from "react";
import {
  walletPerformamcePositive,
  walletPerformamceNegative,
} from "@/utils/mockData3";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const WalletPerformance = () => {
  return (
    <>
      <div className="bg-[#17212F] p-2 rouded-[8px]">
        <p className="font-normal text-[8px] md:text-sm lg:text-sm">
          Win Rate:
        </p>

        <div className="w=[60%] flex justify-start gap-4 md:gap-10 lg:gap-10 mt-2">
          <p className="text-[#0D6EFD] text-sm md:text-[24px] lg:text-[24px] font-bold">
            63.97%
          </p>

          <div className="flex justify-center items-center gap-1">
            <p className="font-normal text-[8px] md:text-sm lg:text-sm ">
              Total Realized Gains:
            </p>

            <span className="text-[#4CA244] text-[8px] md:text-sm lg:text-sm font-semibold">
              $57.90
            </span>
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="font-normal text-[8px] md:text-sm lg:text-sm">
              Total Unrealized gains:
            </p>

            <span className="text-[#E63E3A]  text-[8px] md:text-sm lg:text-sm font-semibold">
              -$16.89
            </span>
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="font-normal  text-[8px] md:text-sm lg:text-sm">
              Total Volume:
            </p>
            <span className="#DBE9FF  text-[8px] md:text-sm lg:text-sm font-semibold">
              $10k
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-6">
        {/* Positive Trades */}

        <div className="w-full md:w-4/5 lg:w-4/5">
          <div className="w-full flex justify-start items-center">
            <h4 className="mt-8 font-bold text-[9px] md:text-base lg:text-base">
              Most Profitable Trades
            </h4>
          </div>
          <Accordion className="my-4" type="single" collapsible>
            {walletPerformamcePositive.map((row) => (
              <AccordionItem
                key={row.id}
                className="w-full border-none mb-6 bg-[#161F2C] rounded-[8px] px-3"
                value={`item-${row.id}`}
              >
                <AccordionTrigger className="flex items-center gap-6 pr-[10%]">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      className="mr-2"
                      height={24}
                      width={24}
                      src={row.logo}
                      alt="logo"
                    />
                    <p className="text-[9px] md:text-xs lg:text-xs font-normal">
                      {row.name}
                    </p>
                  </div>
                  <p className="text-[#4CA244] font-bold text-xs md:text-base lg:text-base">
                    {row.token}
                  </p>
                  <Button className="bg-[#017B46] text-[8px] md:text-[10px] lg:text-[10px] py-2 px-4 text-white rounded-[8px]">
                    {row.button}
                  </Button>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Negative Trades */}

        <div className="w-full md:w-4/5 lg:w-4/5">
          <div className="flex justify-start items-center">
            <h4 className="mt-8 font-bold text-[9px] md:text-base lg:text-base">
              Biggest Losses
            </h4>
          </div>
          <Accordion className="my-4" type="single" collapsible>
            {walletPerformamceNegative.map((row) => (
              <AccordionItem
                key={row.id}
                className="w-full border-none mb-6 bg-[#161F2C] rounded-[8px] px-3"
                value={`item-${row.id}`}
              >
                <AccordionTrigger className="flex items-center gap-6 pr-[10%]">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      className="mr-2"
                      height={24}
                      width={24}
                      src={row.logo}
                      alt="logo"
                    />
                    <p className="text-[9px] md:text-xs lg:text-xs font-normal">
                      {row.name}
                    </p>
                  </div>
                  <p className="text-[#E63E3A] font-bold text-xs md:text-base lg:text-base">
                    {row.token}
                  </p>
                  <Button className="bg-[#017B46] text-[8px] md:text-[10px] lg:text-[10px] py-2 px-4 text-white rounded-[8px]">
                    {row.button}
                  </Button>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};
