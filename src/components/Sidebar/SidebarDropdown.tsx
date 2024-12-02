import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item.map((item: any, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`group relative flex items-center gap-2.5 px-4 py-2 font-semibold  text-gray-500 duration-300 ease-in-out hover:bg-[#5D87FF] hover:text-white ${
                pathname === item.route ? "bg-[#5D87FF] !text-white" : "text-gray-500"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default SidebarDropdown;

