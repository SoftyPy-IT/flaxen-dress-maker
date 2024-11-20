"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col lg:ml-[280px]">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-3 py-5">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
