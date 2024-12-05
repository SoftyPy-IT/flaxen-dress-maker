"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const QuickTransfer = () => {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(45655.44);
  const [transferTo, setTransferTo] = useState("");

  const handleTransfer = () => {
    if (amount > 0 && transferTo) {
      const newBalance = balance - amount;
      setBalance(newBalance > 0 ? newBalance : 0);
      alert(`Transferred $${amount} to ${transferTo}`);
      setAmount(0);
      setTransferTo("");
    } else {
      alert("Please enter a valid amount and recipient.");
    }
  };

  const recentReceivers = [
    { name: "Aaron", color: "bg-blue-200" },
    { name: "Johnny", color: "bg-green-200" },
    { name: "Eliza", color: "bg-purple-200" },
    { name: "Dennis", color: "bg-yellow-200" },
    { name: "Brandon", color: "bg-red-200" },
  ];

  const paymentCategories = [
    {
      label: "Balance",
      value: 1342,
      total: 3000,
      color: "bg-gradient-to-r from-purple-500 to-blue-500",
    },
  ];
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-lg font-semibold">Quick Transfer</h3>
      <div className="mb-4 flex items-center gap-4">
        {/* <Image
          src="https://via.placeholder.com/50"
          alt="user"
          width={12}
          height={12}
          className="w-12 h-12 rounded-full"
        /> */}
        <div>
          <p className="font-semibold">Matthew Gray</p>
          <p className="text-sm text-gray-500">@matthewg</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-semibold">Recent Receiver</p>
        <div className="flex gap-2">
          {recentReceivers.map((receiver, index) => (
            <button
              key={index}
              className={`h-10 w-10 rounded-full ${receiver.color} flex items-center justify-center`}
              onClick={() => setTransferTo(receiver.name)}
            >
              {receiver.name[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-semibold">Insert Amount</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full rounded-lg border p-2"
          placeholder="Enter amount"
        />
      </div>

      <div className="space-y-4 mb-4">
        {paymentCategories.map((item, index) => (
          <div key={index}>
            <div className="mb-2 flex justify-between text-sm font-medium">
              <p>{item.label}</p>
              <p>
                ${item.value.toLocaleString()} / ${item.total.toLocaleString()}
              </p>
            </div>
            <div className="h-2.5 w-full rounded-full bg-gray-200">
              <div
                className={`h-2.5 rounded-full ${item.color}`}
                style={{
                  width: `${(item.value / item.total) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      

      <Button
        className="w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600"
        onClick={handleTransfer}
      >
        Transfer Now
      </Button>
    </div>
  );
};

export default QuickTransfer;
