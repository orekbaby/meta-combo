import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import SettingsTab from "@/components/wallet/settingTab/SettingsTab";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { Slider1 } from "@/components/custom/slider1";
import { Switch1 } from "@/components/custom/switch1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Settings() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="bg-[#212E40] text-white rounded-[6px]"
          variant="default"
          size="sm"
        >
          Settings
        </Button>
      </DialogTrigger>

      <DialogContent className=" h-[90vh] bg-[#0C141F] p-3 border-none overflow-y-auto">
        <div>
          <SettingsTab />
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex p-2 justify-start gap-3 items-center border-b-[1px] border-[#212E40]">
                <h3 className="text-sm font-medium text-left">
                  Trade Settings
                </h3>
                <BsFillExclamationCircleFill />
                <IoIosArrowUp className="text-sm md:text-base lg:text-base" />
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
                  defaultValue={[33]}
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
                  defaultValue={[33]}
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
              <div className="flex pb-2 mt-8 justify-start gap-3 items-center border-b-[1px] border-[#212E40]">
                <h3 className="text-sm font-medium text-left">
                  Trade Settings
                </h3>
                <BsFillExclamationCircleFill />
                <IoIosArrowUp className="text-sm md:text-base lg:text-base" />
              </div>
              <div className="flex flex-col w-full justify-between items-center mt-8">
                <div className="flex w-full justify-between items-center">
                  <p className="text-xs md:text-base lg:text-base font-medium">
                    Fail Safe protection:
                  </p>
                  <Switch1 className="bg-blue-500" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex p-2 justify-start gap-3 items-center border-b-[1px] border-[#212E40]">
                <h3 className="text-sm font-medium text-left">
                  Trade Settings
                </h3>
                <BsFillExclamationCircleFill />
                <IoIosArrowUp className="text-sm md:text-base lg:text-base" />
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
      </DialogContent>
    </Dialog>
  );
}

export { Settings };
