"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";

interface Wallet {
  id: number;
  name: string;
  balance: string;
}

const CreateWallet = () => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);

  useEffect(() => {
    // Fetch wallet data when the component mounts
    fetch("/path-to-your-json/walletData.json")
      .then((response) => response.json())
      .then((data) => setWallets(data))
      .catch((error) => console.error("Error fetching wallet data:", error));
  }, []); // Empty dependency array ensures this effect runs once on mount

  const createWallet = () => {
    // Limit to 3 wallets
    if (wallets.length < 3) {
      const newWallet: Wallet = {
        id: wallets.length + 1,
        name: `Wallet ${wallets.length + 1}`,
        balance: "$0.00",
      };
      setWallets([...wallets, newWallet]);
    }
  };

  const deleteWallet = () => {
    if (selectedWallet) {
      // Filter out the selected wallet
      const updatedWallets = wallets.filter(
        (wallet) => wallet.id !== selectedWallet.id
      );
      setWallets(updatedWallets);
      setSelectedWallet(null);
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="flex justify-between gap-10 mb-3">
        <div className="flex justify-end gap-10">
          {wallets.map((wallet) => (
            <div
              key={wallet.id}
              className="flex gap-6 bg-[#063172] px-3 rounded-[25px] items-center"
            >
              <p className="font-semibold text-[10] md:text-sm  lg:text-sm leading-[17px] md:leading-[23.8px] lg:leading-[23.8px]">
                {wallet.name}
              </p>
              <IoCloseSharp
                className="text-[12px] md:text-[18px] lg:[18px] cursor-pointer"
                onClick={() => {
                  setSelectedWallet(wallet);
                  setShowModal(true);
                }}
              />
            </div>
          ))}
        </div>

        <Button
          size="sm"
          className="button2 bg-[#0d6efd] text-[#e8e8e8] rounded-[5px] text-[12px] md:text-xs lg:text-xs leading-[15.6px] font-bold"
          onClick={createWallet}
        >
          Create Wallet
        </Button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-[#17212F] w-[270px] h-[107x] text-white py-4 px-8 shadow-md rounded-[12px]">
            <p className="font-normal text-[10px] text-center">
              Are you sure you want to delete this Wallet? If you delete this
              wallet, it cannot be recovered again
            </p>

            <div className="flex items-center justify-center mt-4 gap-4 ">
              <Button
                className="bg-[#212E40] rounded text-white mr-2 py-2 px-4"
                onClick={() => {
                  deleteWallet();
                }}
              >
                Yes
              </Button>
              <Button
                className="bg-[#0D6EFD] rounded text-white mr-2 py-2 px-4"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                No
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateWallet;
