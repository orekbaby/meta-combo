"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SecurityKeys from "@/components/wallet/SecurityKeys";

export default function Security() {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSetPassword = () => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password === confirmPassword) {
      setStep(2);
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
      alert("Passwords do not match. Please try again.");
    }
  };

  const handleEnterPassword = () => {
    if (step === 1) {
      alert("Please set a password first.");
    } else {
      setStep(2);
    }
  };

  const handleViewPrivateKeys = () => {
    if (step === 2 && passwordsMatch) {
      setStep(3);
    } else if (step === 2 && !passwordsMatch) {
      alert("Passwords do not match. Please try again.");
    } else {
      alert("Please set a password first.");
    }
  };

  return (
    <>
      {step === 1 && (
        <>
          <div className="bg-[#0C141F] mt-8">
            <label
              className="font-medium text-xs md:text-sm lg:text-sm"
              htmlFor="password"
            >
              Set Password
            </label>
          </div>
          <input
            className="mb-5 mt-2 text-[10px] md:text-xs lg:text-xs w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] bg-[#0C141F] text-[#989898] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="password"
            placeholder="Casperbigbig2345"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="bg-[#0C141F]">
            <label
              className="font-medium text-xs md:text-sm lg:text-sm"
              htmlFor="wallet"
            >
              Confirm Password
            </label>
          </div>
          <input
            className="mb-5 mt-2 text-[10px] md:text-xs lg:text-xs w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="password"
            placeholder="Casperbigbig2345"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!passwordsMatch && (
            <div className="text-red-500">
              Passwords do not match. Please try again.
            </div>
          )}
          <Button
            size="lg"
            className="mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#0D6EFD]
               text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px]"
            onClick={handleSetPassword}
          >
            Set Password
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="bg-[#0C141F] mt-10">
            <label
              className="font-medium text-xs md:text-sm lg:text-sm"
              htmlFor="wallet"
            >
              Enter Password
            </label>
          </div>
          <input
            className="mb-5 mt-2 text-[10px] md:text-xs lg:text-xs w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="password"
            placeholder="Casperbigbig2345"
          />
          <Button
            size="lg"
            className="mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#0D6EFD]
               text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px]"
            onClick={handleViewPrivateKeys}
          >
            View Private Keys
          </Button>
        </>
      )}

      {step === 3 && (
        <>
          <SecurityKeys />
        </>
      )}
    </>
  );
}
