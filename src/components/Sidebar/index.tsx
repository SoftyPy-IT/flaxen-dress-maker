"use client";

import Link from "next/link";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import FormIcon from "@mui/icons-material/Description";
import SignInIcon from "@mui/icons-material/Login";
import SignUpIcon from "@mui/icons-material/AppRegistration";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CategoryIcon from "@mui/icons-material/Category";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ConstructionIcon from '@mui/icons-material/Construction';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    menuItems: [
      {
        label: "Dashboard",
        route: "/",
        icon: <DashboardIcon />,
      },
      {
        label: "Fabric Stock Register",
        route: "/super-admin/stock",
        icon: <InventoryIcon />,
      },
      // ----------------------------
      {
        label: "Fabric Register",
        route: "/super-admin/fabric-reg",
        icon: <LibraryAddIcon />,
      },
      {
        label: "Accessories Requisition",
        route: "/super-admin/accessories-requisition",
        icon: <ConstructionIcon />,
      },
      {
        label: "Cutting Register",
        route: "/super-admin/cutting-reg",
        icon: <ContentCutIcon />,
      },
      {
        label: "Daily Receive",
        route: "/super-admin/daily-receive",
        icon: <OfflinePinIcon />,
      },
      // ------------------------------
      {
        label: "Sample Section",
        route: "/super-admin/sample",
        icon: <CategoryIcon />,
      },
      {
        label: "Fabric Requisition",
        route: "/super-admin/requisition",
        icon: <FormatListBulletedIcon />,
      },
      {
        label: "Delivery Challan",
        route: "/super-admin/challan",
        icon: <LocalOfferIcon />,
      },
      {
        label: "Packing List",
        route: "/super-admin/packing",
        icon: <ListAltIcon />,
      },
      // {
      //   label: "Work Order",
      //   route: "/super-admin/order",
      //   icon: <AssignmentIcon />,
      // },
      // {
      //   label: "Accessories Delivery",
      //   route: "/super-admin/accessories-delivery",
      //   icon: <LocalShippingIcon />,
      // },
      {
        label: "Hourly Receive",
        route: "/super-admin/hourly-receive",
        icon: <AccessTimeFilledIcon />,
      },

      {
        label: "Forms",
        route: "#",
        icon: <FormIcon />,
        children: [
          { label: "Form Elements", route: "/forms/form-elements" },
          { label: "Form Layout", route: "/forms/form-layout" },
        ],
      },
      {
        label: "Settings",
        route: "/settings",
        icon: <SettingsIcon />,
      },
      {
        label: "Authentication",
        route: "#",
        icon: <SignInIcon />,
        children: [
          { label: "Sign In", route: "/auth/signin", icon: <SignInIcon /> },
          { label: "Sign Up", route: "/auth/signup", icon: <SignUpIcon /> },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  // const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r bg-white duration-300 ease-linear lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 shadow lg:justify-center lg:py-6">
          <Link href="/">
            <h2 className="lg:text-center">Flaxen</h2>
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="absolute right-4 block lg:hidden"
          >
            {sidebarOpen && <CloseIcon />}
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
