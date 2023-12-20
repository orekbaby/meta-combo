import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InnerTab from "@/components/wallet/InnerTab";

export default function Settings() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="bg-[#212E40] text-white rounded-[6px] text-[10px] md:text-xs lg:text-xs font-bold"
          variant="default"
          size="sm"
        >
          Settings
        </Button>
      </DialogTrigger>

      <DialogContent className=" h-[80vh] bg-[#0C141F] p-3 border-none overflow-y-auto">
        <InnerTab />
      </DialogContent>
    </Dialog>
  );
}

export { Settings };
