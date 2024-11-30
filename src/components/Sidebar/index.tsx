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
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CategoryIcon from "@mui/icons-material/Category";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";
import CancelIcon from "@mui/icons-material/Cancel";
import AddBoxIcon from '@mui/icons-material/AddBox';
import BuildIcon from '@mui/icons-material/Build';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StraightenIcon from '@mui/icons-material/Straighten';

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
        route: "#",
        icon: <InventoryIcon />,
        children: [
          {
            label: "+ Add Stock Register",
            route: "/super-admin/stock/add-stock",
            // icon: <AddBoxIcon />,
          },
          { label: "Stock Register Index", route: "/super-admin/stock" },
        ],
      },
      // ----------------------------
      {
        label: "Fabric Register",
        route: "#",
        icon: <LibraryAddIcon />,
        children: [
          {
            label: "+ Add Fabric Register",
            route: "/super-admin/fabric-reg/add-fabric-reg",
            // icon: <AddBoxIcon />,
          },
          { label: "Fabric Register Index", route: "/super-admin/fabric-reg" },
        ],
      },
      
      {
        label: "Accessories Requisition",
        route: "#",
        icon: <ConstructionIcon />,
        children: [
          {
            label: "+ Add Accessories Requisition",
            route: "/super-admin/accessories-requisition/add-accessories-requisition",
            // icon: <AddBoxIcon />,
          },
          { label: "Accessories Requisition Index", route: "/super-admin/accessories-requisition" },
        ],
      },
      {
        label: "Accessories Stock",
        route: "#",
        icon: <BuildIcon />,
        children: [
          { label: "Unit", route: "/super-admin/unit", icon: <StraightenIcon />, },
          {
            label: "+ Add Accessories",
            route: "/super-admin/accessories-stock/add-accessories",
            // icon: <AddBoxIcon />,
          },
          { label: "Accessories", route: "/super-admin/accessories-stock" },
        ],
      },
      {
        label: "Cutting Register",
        route: "#",
        icon: <ContentCutIcon />,
        children: [
          {
            label: "+ Add Cutting Register",
            route: "/super-admin/cutting-reg/add-cutting-reg",
            // icon: <AddBoxIcon />,
          },
          { label: "Cutting Register Index", route: "/super-admin/cutting-reg" },
        ],
      },
      {
        label: "Daily Receive",
        route: "/super-admin/daily-receive",
        icon: <OfflinePinIcon />,
        
      },
      {
        label: "Production",
        route: "#",
        icon: <LocalMallIcon />,
        children: [
          {
            label: "+ Add Production",
            route: "/super-admin/production/add-production",
            // icon: <AddBoxIcon />,
          },
          { label: "Production Index", route: "/super-admin/production" },
        ],
       
      },
      // ------------------------------
      {
        label: "Reject",
        route: "#",
        icon: <CancelIcon />,
        children: [
          {
            label: "+ Add Reject",
            route: "/super-admin/reject/add-reject",
            // icon: <AddBoxIcon />,
          },
          { label: "Reject Index", route: "/super-admin/reject" },
        ],
      },
      {
        label: "Sample Section",
        route: "#",
        icon: <CategoryIcon />,
        children: [
          {
            label: "+ Add Sample Section",
            route: "/super-admin/sample/add-sample",
            // icon: <AddBoxIcon />,
          },
          { label: "Sample Section Index", route: "/super-admin/sample" },
        ],
      },
      {
        label: "Fabric Requisition",
        route: "#",
        icon: <FormatListBulletedIcon />,
        children: [
          {
            label: "+ Add Fabric Requisition",
            route: "/super-admin/requisition/add-requisition",
            // icon: <AddBoxIcon />,
          },
          { label: "Fabric Requisition Index", route: "/super-admin/requisition" },
        ],
      },
      {
        label: "Shipment Challan",
        route: "#",
        icon: <LocalOfferIcon />,
        children: [
          {
            label: "+ Add Shipment Challan",
            route: "/super-admin/shipment-challan/add-challan",
            // icon: <AddBoxIcon />,
          },
          { label: "Shipment Challan Index", route: "/super-admin/shipment-challan" },
        ],
      },
      {
        label: "Work Challan",
        route: "#",
        icon: <LocalOfferIcon />,
        children: [
          {
            label: "+ Add Work Challan",
            route: "/super-admin/work-challan/add-challan",
            // icon: <AddBoxIcon />,
          },
          { label: "Work Challan Index", route: "/super-admin/work-challan" },
        ],
      },
      
      {
        label: "Packing List",
        route: "#",
        icon: <ListAltIcon />,
        children: [
          {
            label: "+ Add Packing List",
            route: "/super-admin/packing/add-packing",
            // icon: <AddBoxIcon />,
          },
          { label: "Packing List Index", route: "/super-admin/packing" },
        ],
      },
      {
        label: "Work Order",
        route: "#",
        icon: <AssignmentIcon />,
        children: [
          {
            label: "+ Add Work Order",
            route: "/super-admin/order/add-order",
            // icon: <AddBoxIcon />,
          },
          { label: "Work Order Index", route: "/super-admin/order" },
        ],
      },

      {
        label: "Accessories Delivery",
        route: "#",
        icon: <LocalShippingIcon />,
        children: [
          {
            label: "+ Add Accessories Delivery",
            route: "/super-admin/accessories-delivery/add-accessories",
            // icon: <AddBoxIcon />,
          },
          { label: "Accessories Delivery Index", route: "/super-admin/accessories-delivery" },
        ],
      },
      {
        label: "Hourly Receive",
        route: "#",
        icon: <AccessTimeFilledIcon />,
        children: [
          {
            label: "+ Add Hourly Receive",
            route: "/super-admin/hourly-receive/add-hourly-receive",
            // icon: <AddBoxIcon />,
          },
          { label: "Hourly Receive Index", route: "/super-admin/hourly-receive" },
        ],
      },


      // {
      //   label: "Unit",
      //   route: "/super-admin/unit",
      //   icon: <StraightenIcon />,
      //   children: [
      //     {
      //       label: "+ Add Unit",
      //       route: "/super-admin/",
      //       icon: <AddBoxIcon />,
      //     },
      //     { label: "Unit", route: "/super-admin/unit" },
      //   ],
      // },

      
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
        label: "All Challan Design",
        route: "#",
        icon: <SettingsIcon />,
        children: [
          {
            label: "Printing Unit Challan",
            route: "/super-admin/allchallandesign/printing",
          },
          {
            label: "Delivery Challan",
            route: "/super-admin/allchallandesign/delivery",
          },
        ],
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
      
    
     
      // {
      //   label: "Register",
      //   route: "#",
      //   icon: <FormIcon />,
      //   children: [
      //     {
      //       label: "Fabric Stock Register",
      //       route: "/super-admin/stock",
      //       icon: <InventoryIcon />,
      //     },
      //     {
      //       label: "Fabric Register",
      //       route: "/super-admin/fabric-reg",
      //       icon: <InventoryIcon />,
      //     },
      //     {
      //       label: "Cutting Register",
      //       route: "/super-admin/cutting-reg",
      //       icon: <InventoryIcon />,
      //     },
      //   ],
      // },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  // const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-[300px] flex-col overflow-y-hidden border-r bg-white duration-300 ease-linear lg:translate-x-0 ${
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

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-4">
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
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
