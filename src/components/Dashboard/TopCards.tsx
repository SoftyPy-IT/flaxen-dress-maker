import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const TopCards = () => {
  const cards = [
    {
      title: "Total Order",
      amount: "342",
      bgColor: "bg-blue-500",
      icon: <AddShoppingCartIcon className=" h-10 w-10"/>, 
    },
    {
      title: "Running Order",
      amount: "312",
      bgColor: "bg-green-500",
      icon: <ShoppingCartCheckoutIcon className=" h-10 w-10"/>, 
    },
    {
      title: "Panding Order",
      amount: "332",
      bgColor: "bg-yellow-500",
      icon: <ShoppingCartOutlinedIcon className=" h-10 w-10"/>, 
    },
    {
      title: "Monthly Income",
      amount: "$3,587",
      bgColor: "bg-purple-500",
      icon: <CurrencyExchangeOutlinedIcon className=" h-10 w-10"/>, 
    },
    {
      title: "Yearly Income",
      amount: "$2,332",
      bgColor: "bg-yellow-500",
      icon: <CurrencyPoundOutlinedIcon className=" h-10 w-10"/>, 
    },
    {
      title: "Buyer Due",
      amount: "$3,587",
      bgColor: "bg-purple-500",
      icon: <AddCardOutlinedIcon className=" h-10 w-10"/>, 
    },
    {
      title: "Supplier Due",
      amount: "$2,332",
      bgColor: "bg-blue-500",
      icon: <CurrencyRubleOutlinedIcon className=" h-10 w-10"/>, 
    },
    {
      title: "Monthly Expense",
      amount: "$3,587",
      bgColor: "bg-purple-500",
      icon: <MoneyOffOutlinedIcon className=" h-10 w-10"/>, 
    },
    {
      title: "Yearly Expense",
      amount: "$3,587",
      bgColor: "bg-green-500",
      icon: <AttachMoneyOutlinedIcon className=" h-10 w-10"/>, 
    },
  
    {
      title: "Total Balance",
      amount: "$3,587",
      bgColor: "bg-red-500",
      icon: <EuroOutlinedIcon className=" h-10 w-10"/>, 
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} p-6 rounded-lg shadow-md text-white relative overflow-hidden`}
        >
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-white opacity-20 rounded-full"></div>
          <div className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-lg font-medium">{card.title}</h3>
              <p className="text-2xl font-bold mt-2">{card.amount}</p>
            </div>
            <div className="text-4xl h-10 w-10">{card.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
