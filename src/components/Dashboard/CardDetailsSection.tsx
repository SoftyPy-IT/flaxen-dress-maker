"use client";

import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const CardDetailsSection = () => {
  const data = {
    labels: ["Cutting", "Stock", "Embroidery", "Swing", "Accessories"],
    datasets: [
      {
        label: "My First Dataset",
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Work Details Chart</h3>
      <div style={{ height: "400px", margin: "auto" }}>
        <PolarArea data={data} options={options} />
      </div>
    </div>
  );
};

export default CardDetailsSection;
