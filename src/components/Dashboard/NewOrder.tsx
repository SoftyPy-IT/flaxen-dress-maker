import React from "react";

const orders = [
  { id: "000007", item: "Men's Shirt", time: "10:32 AM", date: "02 Oct, 2023", status: "Approved" },
  { id: "000006", item: "Men's T-shirt", time: "10:31 AM", date: "02 Oct, 2023", status: "Approved" },
  { id: "000005", item: "Long Dresses", time: "10:21 AM", date: "02 Oct, 2023", status: "Approved" },
  { id: "000004", item: "Hijabs", time: "10:20 AM", date: "02 Oct, 2023", status: "Approved" },
  { id: "000003", item: "Brooches", time: "10:20 AM", date: "02 Oct, 2023", status: "Approved" },
  { id: "000002", item: "Long Dresses", time: "10:21 AM", date: "02 Oct, 2023", status: "Approved" },
  { id: "000001", item: "Hijabs", time: "10:20 AM", date: "02 Oct, 2023", status: "Approved" },
  { id: "000008", item: "Brooches", time: "10:20 AM", date: "02 Oct, 2023", status: "Approved" },
  { id: "000009", item: "Brooches", time: "10:20 AM", date: "02 Oct, 2023", status: "Pending" },
  
];

const NewOrder = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">New Order</h3>
        <select className="border border-gray-300 rounded-md p-2 text-sm">
          <option value="status">Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <ul className="mt-4 divide-y divide-gray-200">
        {orders.map((order) => (
          <li key={order.id} className="flex items-center justify-between py-3">
            <div>
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                {order.id}
              </a>
              <p className="text-sm text-gray-500">{order.item}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{order.date}</p>
              <p className="text-sm text-gray-500">{order.time}</p>
            </div>
            <span className="text-sm font-medium text-white bg-blue-500 px-3 py-1 rounded-md">
              {order.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewOrder;
