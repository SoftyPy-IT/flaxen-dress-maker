"use client"


import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const IncomeExpenseChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [20000, 40000, 60000, 80000, 100000, 120000, 140000, 100000, 120000, 160000, 140000, 100000],
        borderColor: "rgba(147, 112, 219, 1)", // Purple line
        backgroundColor: "rgba(147, 112, 219, 0.2)", // Purple fill
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expense",
        data: [10000, 30000, 50000, 70000, 90000, 110000, 130000, 90000, 110000, 140000, 120000, 90000],
        borderColor: "rgba(255, 99, 71, 1)", // Red line
        backgroundColor: "rgba(255, 99, 71, 0.2)", // Red fill
        fill: true,
        tension: 0.4,
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
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Income VS Expense</h3>
        <select className="border border-gray-300 rounded-md p-2 text-sm">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default IncomeExpenseChart;
