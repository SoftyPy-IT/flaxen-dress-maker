"use client"

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const EfficiencySection = () => {
  const data = {
    labels: ["Earned", "Spent"],
    datasets: [
      {
        label: "Efficiency",
        data: [5363, 3245],
        backgroundColor: ["#4CAF50", "#FF9800"],
        hoverBackgroundColor: ["#45A049", "#FFB74D"],
      },
    ],
  };

  const options = {
    cutout: "70%",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Efficiency</h3>
      <div className="flex flex-col items-center">
        <div className="relative">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-blue-500 font-bold text-lg">$5363</p>
            <p className="text-gray-500 text-sm">Earned</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">
            Total Income: <span className="font-semibold">$52,345</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EfficiencySection;
