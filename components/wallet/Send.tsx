import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Send() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="bg-[#212E40] text-white rounded-[6px]"
          variant="default"
          size="sm"
        >
          Send
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="w-auto p-5 bg-[#0C141F]">
          <h2 className="mb-5 text-white text-[16px] md:text-[18px] lg:text-[18px] font-bold leading-[20.8px] md:leading-[23.48px] lg:leading-[23.48px]">
            Send ETH
          </h2>
          <div className="bg-[#0C141F]">
            <label htmlFor="wallet">Wallet</label>
          </div>
          <input
            className="mb-5 mt-2 text-xs md:text-base lg:text-base w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="0xooo...."
          />
          <div className="relative">
            <input
              className="mb-5 mt-2 text-xs md:text-base lg:text-base w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
              type="text"
              placeholder="0.0"
            />
            <Button className="absolute top-2 right-0 w-[57px] md:w-[65px] lg:[65px]  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px]">
              ETH
            </Button>
          </div>
          <div className="flex justify-center md:justify-between lg:justify-between gap-6 items-center">
            {/* width: Fixed (87px) height: Fixed (28px) padding: 4px, 8px, 4px, 8px
            border-radius: 6px gap: 8px */}
            <Button
              size="sm"
              className="bg-[#161F2C] text-white text-xs md:text-base lg:text-base
               font-normal md:font-bold lg:font-bold leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-4 lg:py-4 px-6 md:px-8 lg:px-8 rounded-[8px]"
            >
              0.2ETH
            </Button>
            <Button
              size="sm"
              className="bg-[#161F2C] text-white text-xs md:text-base lg:text-base
               font-normal md:font-bold lg:font-bold leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-4 lg:py-4 px-6 md:px-8 lg:px-8 rounded-[8px]"
            >
              0.5ETH
            </Button>
            <Button
              size="sm"
              className="bg-[#161F2C] text-white text-xs md:text-base lg:text-base
               font-normal md:font-bold lg:font-bold leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-4 lg:py-4 px-6 md:px-8 lg:px-8 rounded-[8px]"
            >
              1ETH
            </Button>
          </div>
          {/* // width: Fixed (314px) // height: Fixed (38px) // padding: 10px,
          18px, 10px, 18px // border-radius: 6px // gap: 8px font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
 */}
          <Button
            size="lg"
            className=" mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#0D6EFD]
             text-white text-[14px] md:text-base lg:text-base font-semibold leading-[24px]"
          >
            Send
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
