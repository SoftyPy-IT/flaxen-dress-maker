import React from "react";

const PaymentsSection = () => {
  const paymentCategories = [
    { label: "Account", value: 1342, total: 3000, color: "bg-gradient-to-r from-blue-500 to-green-500" },
    { label: "Services", value: 1342, total: 3000, color: "bg-gradient-to-r from-green-500 to-yellow-500" },
    { label: "Restaurant", value: 1342, total: 3000, color: "bg-gradient-to-r from-purple-500 to-blue-500" },
    { label: "Foods", value: 1342, total: 3000, color: "bg-gradient-to-r from-purple-500 to-green-500" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Payments</h3>
      <p className="text-sm text-gray-500 mb-4">
        Total Payment in this year <span className="font-semibold">$52,345</span>
      </p>
      <div className="space-y-4">
        {paymentCategories.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm font-medium mb-2">
              <p>{item.label}</p>
              <p>
                ${item.value.toLocaleString()} / ${item.total.toLocaleString()}
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
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
    </div>
  );
};

export default PaymentsSection;
