import React from "react";
import DropdownUser from "./DropdownUser";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";


const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-50 flex w-full bg-blue-500 border-b shadow-lg">
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-6 lg:px-8">


        <h3 className="text-white">Dashboard</h3>
        
       

        <div className="flex items-center gap-2 bg-white rounded-full shadow-md px-4 py-2  border">
            {/* Category Dropdown */}
            <div className="flex items-center gap-2">
              <CategoryIcon sx={{ color: "blue" }} />
              <select className="bg-white text-black rounded px-2 py-1 text-sm">
                <option>Category</option>
                <option>Cutting</option>
                <option>Swing</option>
                <option>Embroidery</option>
                <option>Print</option>
                <option>Stock</option>
              </select>
            </div>

            {/* Divider */}
            <span className="border-l border-gray-300 h-6"></span>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by Order No..."
              className="flex-grow px-4 text-sm text-gray-700 focus:outline-none"
            />

            {/* Search Icon */}
            <button
              type="submit"
              className="text-blue-500 hover:text-blue-700 transition"
              onClick={() => console.log("Search")}
            >
              <SearchIcon />
            </button>
          </div>

   
        <div className="flex items-center gap-4 lg:gap-6">
      
          <button className="relative p-2 text-white bg-blue-400 hover:bg-blue-300 rounded-md">
            <NotificationsIcon />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              5
            </span>
          </button>

          
          <button className="relative p-2 text-white bg-blue-400 hover:bg-blue-300 rounded-md">
            <ChatBubbleIcon />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </button>

    
          <button className="p-2 text-white hover:bg-blue-400 rounded-md">
            <SettingsIcon />
          </button>

        
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
