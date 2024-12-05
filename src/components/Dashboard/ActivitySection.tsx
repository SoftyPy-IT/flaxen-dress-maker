"use client"

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ActivitySection = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Earned",
        data: [12000, 15000, 11000, 18000, 20000, 17000],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Spent",
        data: [8000, 10000, 7000, 12000, 15000, 14000],
        backgroundColor: "#FF9800",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Activity</h3>
      <p className="text-sm text-gray-500 mb-4">
        Total Balance: <span className="font-semibold">$52,345</span>
      </p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivitySection;
