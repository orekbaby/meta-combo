import React from "react";
import { Button } from "@/components/ui/button";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Slider1 } from "@/components/custom/slider1";
import { Switch1 } from "@/components/custom/switch1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import Security from "@/components/wallet/Security";

export default function InnerTab() {
  return (
    <>
      <Tabs defaultValue="WalletSettings" className="w-full">
        <TabsList className="flex mt-6 justify-between gap-0 md:gap-12 lg:gap-12 bg-[#0A1019] items-center md:justify-start lg:justify-start border-b-[1px] border-[#212E40]">
          <TabsTrigger
            className=" w-[140px] md:w-[130px] lg:w-[130px] px-10  font-bold text-[10px] md:text-base lg:text-base ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#E7E7E7]"
            value="WalletSettings"
          >
            {" "}
            Wallet Settings
          </TabsTrigger>
          <TabsTrigger
            className="w-[140px] md:w-[130px] lg:w-[130px] px-10  font-bold ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298]  data-[state=active]:text-[#E7E7E7] text-[#E7E7E7] text-[10px] md:text-base lg:text-base"
            value="Security"
          >
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="WalletSettings">
          <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger className="pr-[55%] md:pr-[65%] lg:pr-[65%]">
                <div className="flex p-2 justify-start gap-3 items-center border-b-[1px] border-[#212E40]">
                  <h3 className="text-sm font-medium text-left">
                    Trade Settings
                  </h3>
                  <BsFillExclamationCircleFill />
                  {/* <IoIosArrowUp className="text-sm md:text-base lg:text-base" /> */}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-6">
                  <h3 className="text-sm md:text-base lg:base font-bold text-white">
                    Scam Score Settings:
                  </h3>
                  <p className="text-[#FFC107] font-medium text-[10px] md:text-xs lg:text-xs">
                    Between 0-100%
                  </p>
                  <Slider1
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="bg-[#0D6EFD] w-full h-2 rounded-lg mt-4"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-sm md:text-base lg:base font-bold text-white">
                    Scam Score Settings:
                  </h3>
                  <p className="text-[#FFC107] font-medium text-[10px] md:text-xs lg:text-xs">
                    Between 0-100%
                  </p>
                  <Slider1
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="bg-[#0D6EFD] w-full h-2 rounded-lg mt-4"
                  />
                </div>
                <div className=" flex w-full items-center justify-between mt-8">
                  <p className="text-xs md:text-base lg:text-base font-medium">
                    Fail Safe protection:
                  </p>
                  <Switch1 className="bg-blue-500" />
                </div>
                <div className="flex justify-between mt-8">
                  <p className="text-xs md:text-base lg:text-base font-medium">
                    Fail Safe protection:
                  </p>
                  <Switch1 className="bg-blue-500" />
                </div>

                <div className="flex flex-col w-full justify-between items-center mt-8">
                  <div className="flex w-full justify-between items-center">
                    <p className="text-xs md:text-base lg:text-base font-medium">
                      Private Transaction:
                    </p>
                    <Switch1 className="bg-blue-500" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-none" value="item-2">
              <AccordionTrigger className="pr-[55%] md:pr-[65%] lg:pr-[65%]">
                <div className="flex p-2 justify-start gap-3 items-center border-b-[1px] border-[#212E40]">
                  <h3 className="text-sm font-medium text-left">
                    Gas Settings
                  </h3>
                  <BsFillExclamationCircleFill />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex justify-between mt-8">
                  <p className="text-xs md:text-base lg:text-base font-medium">
                    Fail Safe protection:
                  </p>
                  <Switch1 className="bg-blue-500" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button
            size="lg"
            className="mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#0D6EFD]
             text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px]"
          >
            Update
          </Button>
        </TabsContent>
        <TabsContent value="Security">
          <Security />
        </TabsContent>
      </Tabs>
    </>
  );
}
