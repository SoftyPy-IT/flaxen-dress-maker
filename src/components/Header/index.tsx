import React from "react";
import DropdownUser from "./DropdownUser";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-50 flex w-full bg-blue-500 border-b shadow-lg">
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-6 lg:px-8">


        <h3 className="text-white">Dashboard</h3>
        
        <div className="flex items-center gap-4 lg:gap-6">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-50 block lg:hidden"
          >
            <MenuIcon className="text-white" />
          </button>
      
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-[280px] rounded-full bg-white py-3 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-500" />
          </div>
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
