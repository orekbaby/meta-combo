import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function () {
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
      <DialogContent>click to exit</DialogContent>
    </Dialog>
  );
}
